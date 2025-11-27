import { Request, Response } from "express";
import { getUserByEmail } from "../../services/authentication/get-user-by-email";
import { createUser } from "../../services/authentication/create-user";

export const registerUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    await createUser(name, email, password);

    return res.status(201).json({ message: "User successfully registered" });
  }

  res.status(400).json({ error: "User already exists" });
};
