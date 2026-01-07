import { prisma } from "../../server";

export const getTransactionByIdService = async (transactionId: number) => {
  const transaction = await prisma.transaction.findUnique({
    where: { id: transactionId },
    include: {
      products: true,
    },
  });

  return transaction;
};
