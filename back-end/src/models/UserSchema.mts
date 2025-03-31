import { model, Schema } from "mongoose";
import { userTodo } from "./todoSchema.mjs";

const userSchema = new Schema ({ 
    email: { type: String, required: true },
    password: { type: String, required: true },
    todo: { type: [userTodo], required: true },
});

const User = model("user", userSchema);
export default User; 
