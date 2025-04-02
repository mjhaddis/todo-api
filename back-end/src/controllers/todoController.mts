import { Request, Response } from "express";
import Todo, { userTodo } from "../models/TodoSchema.mjs";
import User from "../models/UserSchema.mjs";
import jwt from "jsonwebtoken";
import { UserDto } from "../models/UserDto.mjs";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ status: "Missing 'text' in body" });
    }

    const cookie = req.cookies["login"];
    const decodedCookie = jwt.decode(cookie) as UserDto;

    // Hitta användaren baserat på email
    const user = await User.findOne({ email: decodedCookie.email });

    if (!user) {
      return res.status(404).json({ status: "User not found" });
    }

    // Skapa en ny Todo
    const newTodo = new Todo({ id: Date.now(), text, done: false });

    // Spara den nya Todo:n i databasen
    await newTodo.save();

    // Lägg till Todo i användarens todos-lista
    user.todos.push(newTodo._id);

    // Spara uppdaterad användare
    await user.save();

    // Skicka tillbaka uppdaterad användare med populering av todos
    const updatedUser = await User.findById(user._id).populate("todos");

    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

// uppdatera med en cookie när en todo skapas
// hämta userschema
// userSchema.todos.push(newTodo) uppdaterar cookien och userschema med denna
