import { Request, Response } from "express";
import { registerProductService } from "../../services/product/register-product";
import { prisma } from "../../server";

export const registerProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, category, pricePurchase, priceSale, quantity } = req.body;

    await registerProductService(
      name,
      category,
      Number(pricePurchase),
      Number(priceSale),
      Number(quantity)
    );

    return res.status(201).json({ message: "Product successfully registered" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
