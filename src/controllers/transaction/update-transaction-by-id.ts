import { Request, Response } from "express";
import { updateTransactionByIdService } from "../../services/transaction/update-transaction-by-id";
import { getUserFromToken } from "../../services/utils/get-user-from-token";

export const updateTransactionByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { valid, user, error } = getUserFromToken(req);

    if (!valid || !user) {
      return res.status(401).json({ error: error || "Unauthorized access" });
    }
    const { id } = req.params;
    const { type } = req.body;
    await updateTransactionByIdService(Number(id), type);

    return res
      .status(200)
      .json({ message: "Transaction successfully updated" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
