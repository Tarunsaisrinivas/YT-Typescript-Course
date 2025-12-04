import express, { Request, Response } from "express";
import { ConnectDB } from "./lib/db";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to My Channel");
});
app.listen(PORT, () => {
  ConnectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
