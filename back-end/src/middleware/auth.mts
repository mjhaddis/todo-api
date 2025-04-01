import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserDto } from "../models/UserDto.mjs";
import User from "../models/UserSchema.mjs";
declare global {
    namespace Express {
      interface Request {
        userEmail?: string;
      }
    }
  }

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const loginCookie = req.cookies["login"];

    if (!loginCookie) {
        res.status(401).end();
    } else {
        const result = jwt.decode(loginCookie);

        if(!result) {
            res.status(401).end();
        } else {
            const theUser: UserDto = result as UserDto;
            req.userEmail = theUser.email;
            next();
            }
    }
    
}

