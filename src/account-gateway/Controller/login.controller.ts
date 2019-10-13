<<<<<<< HEAD
import { NextFunction , Request , Response} from "express";
import {validationResult} from "express-validator";
import { getConnection } from "typeorm";

import HttpMessage from "./../../../Config/request.message";
import {UsersEntity} from "./../../Entity";
import {EncryptHelper, HttpRequestCode, HttpResponse, TokenHelper} from "./../../helper";
import {login} from "./../model";

/**
 *
 * @param {Request} req Get request params from API
 * @param {Response} res Send response to API
 * @param {NextFunction} next Forward to API response
 */
export default async function(req: Request, res: Response, next: NextFunction) {

    let IsPasswordMatch: boolean = false;

    // @param Get Request params
    const auth: login = req.body;

    // Check request validation scheema
    const errors = validationResult(req);

    // Initlization Token helper
    const Token = new TokenHelper();

    // Set response option for api request
    let _HttpResponse = HttpResponse(HttpRequestCode.LOGIN_PROVIDER);

    if (!errors.isEmpty()) {
        return res.status(422).send(_HttpResponse.Error(HttpMessage.SERVER_VALIDATION, { errors: errors.array() }));
    }

    // Initlization Encryption Method
    const PasswordHelper = new EncryptHelper();

    try {

        const UsersQuery = await getConnection().getRepository(UsersEntity);

        /**
         * @method Find username if exist
         * @summary find user from username when user is enable in status
         */
        const UserExist = await UsersQuery.findAndCount({
            where: {
                email: auth.email
            }
        });

        if (UserExist[0][0].password) {
            IsPasswordMatch = await PasswordHelper.Compare(auth.password, UserExist[0][0].password);
        } else {
            IsPasswordMatch = false;
        }

        // Check User is Exist
        if (UserExist[1] === 0) {
            return res.status(422).send(_HttpResponse.Error(HttpMessage.INVALID_CREDENTIAL));
        } else if (UserExist[1] > 0 && !UserExist[0][0].enabled) {
            return res.status(422).send(_HttpResponse.Error(HttpMessage.USER_BLOCKED));
        } else if (UserExist[1] > 0 && !UserExist[0][0].verified) {
            return res.status(422).send(_HttpResponse.Error(HttpMessage.USER_UNVERIFIED));
        } else if (UserExist[1] > 0 && UserExist[0][0].enabled && UserExist[0][0].verified && IsPasswordMatch) {

            // remove unnessory field from response
            delete UserExist[0][0].user_id;
            delete UserExist[0][0].salt;
            delete UserExist[0][0].password;
            const t = await Token.Set(auth.email, "ACCOUNT_VERIFIED", 1);
            return res.send(_HttpResponse.Success(HttpMessage.LOGIN_SUCCESS, t));
        } else {
            // throw error when passowrd doesn't match
            return res.status(422).send(_HttpResponse.Error(HttpMessage.INVALID_CREDENTIAL));
        }

    } catch {
        //  throw error when internal code error
        return res.status(500).send(_HttpResponse.Error(HttpMessage.INTERNAL_SERVER_ERROR));
    }
}
=======
import { NextFunction , Request , Response} from "express";
import {validationResult} from "express-validator";
import { getConnection } from "typeorm";

import HttpMessage from "./../../../Config/request.message";
import {UsersEntity} from "./../../Entity";
import {EncryptHelper, HttpRequestCode, HttpResponse, TokenHelper} from "./../../helper";
import {login} from "./../model";

/**
 *
 * @param {Request} req Get request params from API
 * @param {Response} res Send response to API
 * @param {NextFunction} next Forward to API response
 */
export default async function(req: Request, res: Response, next: NextFunction) {

    let IsPasswordMatch: boolean = false;

    // @param Get Request params
    const auth: login = req.body;

    // Check request validation scheema
    const errors = validationResult(req);

    // Initlization Token helper
    const Token = new TokenHelper();

    // Set response option for api request
    let _HttpResponse = HttpResponse(HttpRequestCode.LOGIN_PROVIDER);

    if (!errors.isEmpty()) {
        return res.status(422).send(_HttpResponse.Error(HttpMessage.SERVER_VALIDATION, { errors: errors.array() }));
    }

    // Initlization Encryption Method
    const PasswordHelper = new EncryptHelper();

    try {

        const UsersQuery = await getConnection().getRepository(UsersEntity);

        /**
         * @method Find username if exist
         * @summary find user from username when user is enable in status
         */
        const UserExist = await UsersQuery.findAndCount({
            where: {
                email: auth.email
            }
        });

        if (UserExist[0][0].password) {
            IsPasswordMatch = await PasswordHelper.Compare(auth.password, UserExist[0][0].password);
        } else {
            IsPasswordMatch = false;
        }

        // Check User is Exist
        if (UserExist[1] === 0) {
            return res.status(422).send(_HttpResponse.Error(HttpMessage.INVALID_CREDENTIAL));
        } else if (UserExist[1] > 0 && !UserExist[0][0].enabled) {
            return res.status(422).send(_HttpResponse.Error(HttpMessage.USER_BLOCKED));
        } else if (UserExist[1] > 0 && !UserExist[0][0].verified) {
            return res.status(422).send(_HttpResponse.Error(HttpMessage.USER_UNVERIFIED));
        } else if (UserExist[1] > 0 && UserExist[0][0].enabled && UserExist[0][0].verified && IsPasswordMatch) {

            // remove unnessory field from response
            delete UserExist[0][0].user_id;
            delete UserExist[0][0].salt;
            delete UserExist[0][0].password;
            const t = await Token.Set(auth.email, "ACCOUNT_VERIFIED", 1);
            return res.send(_HttpResponse.Success(HttpMessage.LOGIN_SUCCESS, t));
        } else {
            // throw error when passowrd doesn't match
            return res.status(422).send(_HttpResponse.Error(HttpMessage.INVALID_CREDENTIAL));
        }

    } catch {
        //  throw error when internal code error
        return res.status(500).send(_HttpResponse.Error(HttpMessage.INTERNAL_SERVER_ERROR));
    }
}
>>>>>>> master
