import { model, Schema } from "mongoose";

const TodoSchema = new Schema({
  id: { type: Number, required: true },
  text: { type: String, required: true },
  done: { type: Boolean, required: true },
});

const Todo = model("todo", TodoSchema);
export default Todo;
