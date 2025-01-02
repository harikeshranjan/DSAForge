import express, { Express, Request, Response } from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";

import tutorialRouter from "./routes/tutorial";
import interviewQuestionsRouter from "./routes/interview-questions";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: [process.env.CLIENT_URL as string],
  credentials: true
}));

app.use('/tutorial', tutorialRouter);
app.use('/interview-questions', interviewQuestionsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
