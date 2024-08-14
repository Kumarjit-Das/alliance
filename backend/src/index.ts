import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database";
import userRoutes from "./features/user/user.controller";


async function main() {
  dotenv.config();
  const connected = await connectDatabase()
  if(!connected) {
    console.log("Could not connect to database")
    return;
  }

  const app: Express = express();
  const port = process.env.PORT || 3001;
  app.use(express.json())
  app.use(userRoutes)
  

  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

main()