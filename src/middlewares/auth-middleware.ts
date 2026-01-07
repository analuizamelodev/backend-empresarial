import { Request, Response, NextFunction } from "express";
import { validateToken } from "../services/authentication/auth/validate-token";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization token not provided",
    });
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    return res.status(401).json({
      message: "Token malformed",
    });
  }

  const validation = validateToken(token);

  if (!validation.valid) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }

  const user = validation.decoded as { id: number; email: string };

  req.user = {
    id: String(user.id),
    email: user.email,
  };

  return next();
};
