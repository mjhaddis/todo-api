import { InferSchemaType, model, Schema } from "mongoose";
import { userTodo } from "./TodoSchema.mjs";
import { UserDto } from "./UserDto.mjs";
import { TodoDto } from "./TodoDto.mjs";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  todos: { type: [userTodo], required: true },
});

const User = model("user", userSchema);
export default User;

type UserType = InferSchemaType<typeof User.schema>;

export const convertedUser = (userFromDb: UserType): UserDto => {
  return {
    email: userFromDb.email,
    todos: userFromDb.todos.map(
      (t) => ({ id: t.id, text: t.text, done: t.done } satisfies TodoDto)
    ),
  } satisfies UserDto;
};
