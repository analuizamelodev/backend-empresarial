import { Request, Response } from "express";
import { createTransactionService } from "../../services/transaction/create-transaction";

export const createTransactionController = async (
  req: Request,
  res: Response
) => {
  try {
    const { type, products } = req.body;

    const result = await createTransactionService(type, products);

    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(400).json({
      error: error.message ?? "Internal server error",
    });
  }
};
