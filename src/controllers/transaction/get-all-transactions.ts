import { Request, Response } from "express";
import { getAllTransactionsService } from "../../services/transaction/get-all-transactions";
import { getUserFromToken } from "../../services/utils/get-user-from-token";

export const getAllTransactionsController = async (
  req: Request,
  res: Response
) => {
  try {
    const { valid, user, error } = getUserFromToken(req);

    if (!valid || !user) {
      return res.status(401).json({ error: error || "Unauthorized access" });
    }

    const transactions = await getAllTransactionsService();
    return res.status(200).json(transactions);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
