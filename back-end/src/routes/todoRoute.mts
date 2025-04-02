import express, { Router } from "express";
import { auth } from "../middleware/auth.mjs";
import { createTodo } from "../controllers/todoController.mjs";

const todoRouter = express.Router();

todoRouter.post("/", auth, createTodo);

export default todoRouter;
