import { prisma } from "../../server";

export const updateTransactionByIdService = async (
  transactionId: number,
  data: {
    quantity?: number;
    unitPrice?: number;
    totalPrice?: number;
  }
) => {
  const updatedTransaction = await prisma.productsOnTransactions.update({
    where: { id: transactionId },
    data,
  });
  return updatedTransaction;
};
