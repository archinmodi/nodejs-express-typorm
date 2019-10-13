import { NextFunction , Request , Response} from "express";
import { getConnection } from "typeorm";
import { SiteConfigEntity } from "./../../Entity";

/**
 *
 * @param {Request} req Get request params from API
 * @param {Response} res Send response to API
 * @param {NextFunction} next Forward to API response
 */
export default async function(req: Request, res: Response, next: NextFunction) {
    res.send("products");
}
