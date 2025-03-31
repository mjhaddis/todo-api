import User from "../models/userSchema.mjs";
import bcrypt from "bcryptjs";

export const createUser = async () => {
    const existingUser = await User.findOne({ email: data.email });

    if (existingUser) {
        throw Error("User with email " + data.email + " already exists.");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.password, salt);

    const newUser = await User.create({
        email: data.name,
        password: hash,
    });

    return 

}