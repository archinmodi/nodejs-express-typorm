<<<<<<< HEAD
import chalk from "chalk";
import express, { NextFunction , Request , Response} from "express";
const router = express.Router();

/* Import gateway  */
import AuthGateway from "./account-gateway";
import CommonGateway from "./common-gateway";

router.use((req: Request, res: Response, next: NextFunction) => {
    next();
});

/**
 * @swagger
 * /users:
 *    get:
 *      description: This should return all users
 */
router.use(AuthGateway);

router.use(CommonGateway);

export default router;
=======
import chalk from "chalk";
import express, { NextFunction , Request , Response} from "express";
const router = express.Router();

/* Import gateway  */
import AuthGateway from "./account-gateway";
import CommonGateway from "./common-gateway";

router.use((req: Request, res: Response, next: NextFunction) => {
    next();
});

/**
 * @swagger
 * /users:
 *    get:
 *      description: This should return all users
 */
router.use(AuthGateway);

router.use(CommonGateway);

export default router;
>>>>>>> master
