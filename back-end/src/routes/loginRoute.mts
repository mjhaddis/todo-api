import express from "express";
import jwt from "jsonwebtoken";
import { login } from "../controllers/loginController.mjs";

export const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.status(400).send("Missing login information");
    } else {
      const loggedInUser = await login(email, password);

      if (!loggedInUser) {
        res.status(400).json({ message: "Incorrect email/password" });
      } else {
        console.log(loggedInUser);
        const token = jwt.sign(
          {
            email: loggedInUser.email,
            password: loggedInUser.password,
            todos: loggedInUser.todos,
          },
          "userOkey"
        );
        console.log(token);

        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 1);

        res.cookie("login", token, {
          expires: currentDate,
          httpOnly: false,
        });
        res.status(200).json(loggedInUser);
      }
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
