import { Request, Response } from "express";
import { registerProduct } from "../../services/product/register-product";
import { getUserFromToken } from "../../services/utils/get-user-from-token";

export const registerProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { valid, user, error } = getUserFromToken(req);

    if (!valid || !user) {
      return res.status(401).json({ error: error || "Unauthorized access" });
    }
    const { name, category, price, validity } = req.body;

    await registerProduct(
      name,
      category,
      price,
      validity ? new Date(validity) : null
    );

    return res.status(201).json({ message: "Product successfully registered" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
