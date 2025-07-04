import "express";
import express from "express";
import morgan from "morgan";
import * as admin from "firebase-admin";
import * as serviceAccount from "../../serviceAccount.json"
import cors from "cors"
import { PORT } from "./"
import { Connection } from "./connect"
import { AccountRoutes } from "../routes/account-routes";
import { SpaceRoutes } from "../routes/space-routes";
import { TagRoutes } from "../routes/tag-routes";

export class Server {
    public app: express.Application;
    public connect: Connection;

    /** 
   * Constructor 
   */
    constructor() {
        this.app = express();
        this.firebase();
        this.config();
        this.routes();
        this.connect = new Connection();
    }

    /** 
    * Controller routes
    */
    public routes(): void {
        this.app.use("/api/accounts", AccountRoutes);
        this.app.use("/api/spaces", SpaceRoutes);
        this.app.use("/api/tags", TagRoutes);
    }

    /** 
    * Firebase Configuration
    */
    public firebase(): void {
        if (!admin.apps.length)
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
            });
    }

    /** 
    * App Configuration
    */
    public config(): void {
        const corsOptions = {
            origin: "*",
            credentials: true,
        }

        this.app.use(morgan("dev"));
        this.app.set("port", PORT);
        this.app.use(express.json({ type: "application/json" }));
        this.app.use(express.urlencoded({ extended: true }))

        /** API */
        this.app.use(cors(corsOptions));

        this.app.use((req: any, res: any, next: any) => {
            /** Sites we will allow to connect */
            res.setHeader("Access-Control-Allow-Origin", "*")

            /** Methods we will allow */
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")

            /** Request Headers we will allow */
            res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")

            /** Set to true if you need the website to include cookies in the requests sent
                to the API (e.g. in case you use sessions) */
            res.setHeader("Access-Control-Allow-Credentials", "true")

            /** Go to next process */
            next();
        })
    }

    /** 
    * Start server
    */
    public start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log("ApI is running @ http://localhost:%d", this.app.get("port"));
        });
    }
}