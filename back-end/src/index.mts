import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { loginRouter } from "./routes/loginRoute.mjs";
import { registerRouter } from "./routes/registerRoute.mjs";

dotenv.config();

const app = express();

app.use(json());

const PORT = process.env.PORT || 3000;
const dbURL = process.env.MONGO_URL;

app.get("/ping", (_, res) => {
  res.status(200).json({ message: "Server is runnin" });
});

app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.listen(PORT, async () => {
  await mongoose.connect(
    "mongodb+srv://frejaedberg:S3CTipSfhwUx@cluster0.m1w1q.mongodb.net/userstodo?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`Server is running @ http://localhost:${PORT}`);
});
