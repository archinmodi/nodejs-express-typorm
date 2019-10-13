import express from "express";
import "reflect-metadata";

import { ConfigController, HomeController } from "./Controller";

const router = express.Router();

router.get("/config", ConfigController); // app config route
router.get("/index", HomeController); // home route

export default router;
