import { NextFunction , Request , Response} from "express";
import EncryptHelper from "./../../helper/bcrypt";

import { validationResult } from "express-validator";
import { getConnection } from "typeorm";
import HttpMessage from "./../../../Config/request.message";
import { UsersDetailsEntity, UsersEntity } from "./../../Entity";
import { HttpRequestCode, HttpResponse } from "./../../helper/HttpResponse";
import { register } from "./../model";

/**
 *
 * @param {Request} req Get request params from API
 * @param {Response} res Send response to API
 * @param {NextFunction} next Forward to API response
 */
export default async function(req: Request, res: Response, next: NextFunction) {
    // @param Get Request params
    const body: register = req.body;

    // Check request validation scheema
    const errors = validationResult(req);

    // Set response option for api request
    let _HttpResponse = HttpResponse(HttpRequestCode.REGISTER_PROVIDER);

    if (!errors.isEmpty()) {
        return res.send(
            _HttpResponse.Error(HttpMessage.SERVER_VALIDATION, {
                errors: errors.array()
            })
        );
    }

    // Initlization Encryption Method
    const PasswordHelper = new EncryptHelper();

    try {
        const UsersQuery = await getConnection().getRepository(UsersEntity);
        const UsersDetailsQuery = await getConnection().getRepository(
            UsersDetailsEntity
        );

        /**
         * @method Find username if exist
         * @summary find user from email, if exist,blocked or unverifed the throw error
         */

        const UserExist = await UsersQuery.findAndCount({
            where: {
                email: body.email
            }
        });

        // Check User is Exist
        if (
            UserExist[1] > 0 &&
            UserExist[0][0].enabled &&
            UserExist[0][0].verified
        ) {
            return res.send(_HttpResponse.Error(HttpMessage.USER_ISEXIST));
        } else if (UserExist[1] > 0 && !UserExist[0][0].enabled) {
            // Check User is blocked
            return res.send(_HttpResponse.Error(HttpMessage.USER_BLOCKED));
        } else if (UserExist[1] > 0 && !UserExist[0][0].verified) {
            // check user is unverified
            return res.send(_HttpResponse.Error(HttpMessage.USER_UNVERIFIED));
        }

        // Initilize UserDetails in object for users table
        const UserAddEntity = new UsersEntity();
        UserAddEntity.username = body.email;
        UserAddEntity.email = body.email;
        UserAddEntity.enabled = true;
        UserAddEntity.last_login = new Date();
        UserAddEntity.user_type = "USER";
        UserAddEntity.verified = false;

        await PasswordHelper.Hash(body.password).then((password) => {
            UserAddEntity.password = String(password);
        });

        await PasswordHelper.Salt().then((salt) => {
            UserAddEntity.salt = String(salt);
        });

        // Initilize UserDetails in object for user_details table
        const UsersDetailsAddEntity = new UsersDetailsEntity();

        // Save users data in users table
        const UserAddMethod = await UsersQuery.save(UserAddEntity);

        // assign user_id in user_details entity for insert record
        UsersDetailsAddEntity.user_id = UserAddMethod.user_id;

        // save users details data in users_details table
        const UserDetailsMethod = await UsersDetailsQuery.save(
            UsersDetailsAddEntity
        );

        const queryRunner = getConnection().createQueryRunner();

        try {
            // lets now open a new transaction:
            await queryRunner.startTransaction();

            // execute operations on this transaction:
            await queryRunner.manager.save(UserAddMethod);
            await queryRunner.manager.save(UserDetailsMethod);

            // commit transaction now:
            await queryRunner.commitTransaction();

            res.send(_HttpResponse.Success(HttpMessage.USER_CREATE_SUCCESS, null));
        } catch (err) {
            // since we have errors lets rollback changes we made
            await queryRunner.rollbackTransaction();
            return res.send(_HttpResponse.Error(HttpMessage.INTERNAL_SERVER_ERROR));
        } finally {
            // you need to release query runner which is manually created:
            await queryRunner.release();
        }
    } catch {
        //  throw error when internal code error
        res.send(_HttpResponse.Error(HttpMessage.INTERNAL_SERVER_ERROR));
    }
}
