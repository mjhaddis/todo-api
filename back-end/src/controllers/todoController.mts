import { Request, Response } from "express";
import { userTodo } from "../models/TodoSchema.mjs";
import User from "../models/UserSchema.mjs";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { id, text, done } = req.body;

    if (!text) {
      res.status(400).json({ status: "missing something in body" });
    } else {
      const newTodo = await User.create({
        todos: {
          id: Date.now(),
          text,
          done: false,
        },
      });
      res.status(201).json(newTodo);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// uppdatera med en cookie när en todo skapas
// hämta userschema
// userSchema.todos.push(newTodo) uppdaterar cookien och userschema med denna
