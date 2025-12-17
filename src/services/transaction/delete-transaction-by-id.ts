import { prisma } from "../../server";

export const deleteTransactionByIdService = async (transactionId: number) => {
  const deleted = await prisma.ProductsOnTransactions.delete({
    where: { id: transactionId },
  });

  return deleted;
};
