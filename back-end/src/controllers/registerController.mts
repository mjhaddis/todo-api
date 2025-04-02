import User, { convertedUser } from "../models/UserSchema.mjs";
import bcrypt from "bcryptjs";
import { UserInputDto } from "../routes/registerRoute.mjs";

export const createUser = async (data: UserInputDto) => {
  const existingUser = await User.findOne({ email: data.email });

  if (existingUser) {
    throw Error("User with email " + data.email + " already exists.");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(data.password, salt);

  const newUser = await User.create({
    email: data.email,
    password: hash,
  });

  // return convertedUser(newUser);
  return newUser;
};
