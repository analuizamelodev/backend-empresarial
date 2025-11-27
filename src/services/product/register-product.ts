import { prisma } from "../../server";

export const registerProduct = async (
  name: string,
  category: string,
  price: number,
  validity: Date | null
) => {
  await prisma.product.create({
    data: {
      name,
      category,
      price,
      validity,
    },
  });
};
