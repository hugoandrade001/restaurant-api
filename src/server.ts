import express, { Application, NextFunction, Request, Response } from "express";
import appRoutes from "./routes/appRouter";
import { CustomError } from "./globals/cores/error";
import HTTP_STATUS from "./globals/constants/https.constants";


export class Server {

    private app: Application;

    constructor() {
        this.app = express()
    }

    public start() {
        this.setupMiddlewares();    
        this.setupRoutes();        
        this.setupGlobalErrors(); 
        this.listenServer();       
    }
    

    public setupRoutes() {
        appRoutes(this.app)
    }

    public setupMiddlewares() {
        this.app.use(express.json()); 
    }

    public listenServer() {
        const port = 4000;

        this.app.listen(port, () => {
            console.log("connected to this port:", port);
        });
    }

    public setupGlobalErrors() {
        this.app.use((req: Request, res: Response) => {
            return res.status(404).json({
              message: `The URL ${req.originalUrl} not found with the method`
            });
          });
        
          this.app.use((error: any, req: Request, res: Response, next: NextFunction) => {
            if (error instanceof CustomError) {
              return res.status(error.statusCode).json({ message: error.message });
            }
            return res
              .status(HTTP_STATUS.INTERNAL_SERVER)
              .json({ message: 'Something went wrong' });
          });
    }
}

