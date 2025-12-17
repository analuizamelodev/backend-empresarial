import { prisma } from "../../server";

export const getTransactionByIdService = async (transactionId: number) => {
  const transaction = await prisma.ProductsOnTransactions.findUnique({
    where: { id: transactionId },
  });
  return transaction;
};
