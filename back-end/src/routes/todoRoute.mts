import express from "express";

export const todoRouter = express.Router();

todoRouter.post("/", (req, res) => {
  const { text } = req.body;

  try {
    if (!text) {
    }
  } catch (error) {}
});
