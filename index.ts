import "reflect-metadata";
import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import fs from "fs";
import cors from 'cors';
import helmet from 'helmet';
import moment from "moment";
import morgan from "morgan";
import path from "path";
import router from "./src/index";
import Swagger from "./config/swagger.config";
import DBConnection from "./config/db.connnection";
const app = express();

const PORT = process.env.PORT || process.env.LOCAL_PORT;

DBConnection()
  .then(function() {
    // Remove Header
    app.disable("x-powered-by");

    // view engine setup
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");

    // jwt secret token
    app.set("secretKey", process.env.SECRET_KEY);
    
    // create a write stream (in append mode)
    const accessLogStream = fs.createWriteStream(
      path.join(
        __dirname,
        `logs/${new Date().getFullYear()}/${moment().format("DD-MMM")}.log`
      ),
      { flags: "a" }
    );

    // setup the logger
    app.use(morgan("", { stream: accessLogStream }));

    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());
    app.use("/api/v1", router);
    app.use("/api-docs", Swagger.serve, Swagger.setup);

    app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );    

    app.get("/", (req: Request, res: Response) => {
      res.render("index", { page: "Home" });
    });

    app.listen(PORT, () => {
      console.log(`App Run on ${PORT}`);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
