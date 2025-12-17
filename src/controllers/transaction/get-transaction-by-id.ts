import { Request, Response } from "express";
import { getTransactionByIdService } from "../../services/transaction/get-transaction-by-id";
import { getUserFromToken } from "../../services/utils/get-user-from-token";

export const getTransactionByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { valid, user, error } = getUserFromToken(req);

    if (!valid || !user) {
      return res.status(401).json({ error: error || "Unauthorized access" });
    }
    const { id } = req.params;
    const transaction = await getTransactionByIdService(Number(id));

    return res.status(200).json(transaction);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
