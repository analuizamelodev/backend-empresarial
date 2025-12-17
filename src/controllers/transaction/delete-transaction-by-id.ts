import { Request, Response } from "express";
import { deleteTransactionByIdService } from "../../services/transaction/delete-transaction-by-id";
import { getUserFromToken } from "../../services/utils/get-user-from-token";

export const deleteTransactionByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { valid, user, error } = getUserFromToken(req);

    if (!valid || !user) {
      return res.status(401).json({ error: error || "Unauthorized access" });
    }
    const { id } = req.params;
    await deleteTransactionByIdService(Number(id));

    return res
      .status(200)
      .json({ message: "Transaction successfully deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
