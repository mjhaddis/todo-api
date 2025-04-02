import { InferSchemaType, model, Schema } from "mongoose";
import { UserDto } from "./UserDto.mjs";
import { TodoDto } from "./TodoDto.mjs";
import Todo from "./TodoSchema.mjs";
import mongoose from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // todos: { type: [Todo], required: true },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "todo" }],
});

// type UserType = InferSchemaType<typeof User.schema>;

// export const convertedUser = (userFromDb: UserType): UserDto => {
//   return {
//     email: userFromDb.email,
//     todos: userFromDb.todos.map(
//       (t) => ({ id: t.id, text: t.text, done: t.done } satisfies TodoDto)
//     ),
//   } satisfies UserDto;
// };

const User = model("user", userSchema);
export default User;
