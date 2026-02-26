import express, { Application, Request, Response } from "express";
import { connectDB } from "./config/db";
import { config } from "./config";
import userRoutes from "./routes/userRoutes";

const app: Application = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API server user service is runningdadawdawdaw ✅");
});

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
