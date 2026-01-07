import { prisma } from "../../server";

export const getAllTransactionsService = async () => {
  const transactions = await prisma.transaction.findMany({
    include: {
      products: true,
    },
  });

  return transactions;
};
