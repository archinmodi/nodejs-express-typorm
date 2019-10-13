import {TokensEntity} from "./../../Entity";
import { NextFunction , Request , Response} from "express";
import { getConnection } from "typeorm";

/**
 *
 * @param {Request} req Get request params from API
 * @param {Response} res Send response to API
 * @param {NextFunction} next Forward to API response
 */
export default async function(req: Request, res: Response, next: NextFunction) {
    const TokenQuery = await getConnection().getRepository(TokensEntity);

    TokenQuery.delete({token: req.headers.authorization});
    res.send("");
}
