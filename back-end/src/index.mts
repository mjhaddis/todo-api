import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { loginRouter } from "./routes/loginRoute.mjs";
import { registerRouter } from "./routes/registerRoute.mjs";
import cors from "cors"

dotenv.config();

const PORT = process.env.PORT || 3000;
const dbURL = process.env.MONGO_URL;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
)
app.use(express.json());
app.use("/register", registerRouter);
app.get("/login", loginRouter);

app.get("/ping", (_, res) => {
  res.status(200).json({ message: "Server is runnin" });
});

app.listen(PORT, async () => {
  await mongoose.connect(
    "mongodb+srv://frejaedberg:S3CTipSfhwUx@cluster0.m1w1q.mongodb.net/userstodo?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`Server is running @ http://localhost:${PORT}`);
});
