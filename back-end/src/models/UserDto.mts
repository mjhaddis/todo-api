import { TodoDto } from "./TodoDto.mjs";

export type UserDto = {
  email: string;
  todos: TodoDto[];
};
