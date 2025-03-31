import { Schema } from "mongoose"

export const userTodo = new Schema ({
    text: { type: String, required: true },
    done: { type: Boolean, required: true },
})