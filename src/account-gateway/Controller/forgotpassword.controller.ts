import { getConnection } from 'typeorm'
import {validationResult} from 'express-validator'
import { Request , Response , NextFunction} from 'express'

import {UsersEntity} from './../../Entity'
import {login} from './../model'
import HttpMessage from './../../../Config/request.message'
import {EncryptHelper,HttpRequestCode,HttpResponse,TokenHelper} from './../../helper'

/**
 *
 * @param {Request} req Get request params from API
 * @param {Response} res Send response to API
 * @param {NextFunction} next Forward to API response 
 */
export default async function (req: Request, res: Response, next: NextFunction) {     

    // @param Get Request params 
    let auth : {email:string} = req.body;

    // Check request validation scheema
    let errors = validationResult(req);

    // Initlization Token helper
    let _Token = new TokenHelper();

    // Set response option for api request
    let _HttpResponse = HttpResponse(HttpRequestCode.RESET_PASSWORD);
   
    if (!errors.isEmpty()) {
        return res.send(_HttpResponse.Error(HttpMessage.SERVER_VALIDATION,{ errors: errors.array() }))
    } 

    try {
        
        let _UsersQuery = await getConnection().getRepository(UsersEntity);
        
        /**
         * @method Find username if exist
         * @summary find user from username when user is enable in status
         */
        let _UserExist = await _UsersQuery.findAndCount({
            where: {
                email: auth.email
            }
        }); 
        
        // Check User is Exist
        if (_UserExist[1] === 0) {
            return res.send(_HttpResponse.Error(HttpMessage.USER_NOTFOUND));
        }

        // Check User is blocked
        else if (_UserExist[1] > 0 && !_UserExist[0][0].enabled) {
            return res.send(_HttpResponse.Error(HttpMessage.USER_BLOCKED));
        }

        else{
            res.send('forgot password')
        }       

    } catch {
        //  throw error when internal code error
        return res.send(_HttpResponse.Error(HttpMessage.INTERNAL_SERVER_ERROR));
    }
}
