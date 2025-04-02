import User, { convertedUser } from "../models/UserSchema.mjs";
import bcrypt from "bcryptjs";

export const login = async (email: string, password: string) => {
  const foundUser = await User.findOne({ email: email });

  if (!foundUser) {
    throw Error("did not find user with email " + email);
  }

  const success = await bcrypt.compare(password, foundUser.password);

  if (success) {
    // return convertedUser(foundUser);
    return foundUser;
  } else {
    return null;
  }
};
