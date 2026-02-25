import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response): void => {
  res.send("TypeScript Express works ✅");
});

app.listen(3000, (): void => {
  console.log("Server running on http://localhost:3000");
});