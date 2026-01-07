import { prisma } from "../../server";
import { z } from "zod";

type TransactionType = "purchase" | "sale";

const productInputSchema = z.object({
  productId: z.coerce.number().int().positive(),
  quantity: z.coerce.number().int().positive(),
});

type ProductInput = z.infer<typeof productInputSchema>;

export const createTransactionService = async (
  type: TransactionType,
  products: ProductInput[]
) => {
  return await prisma.$transaction(async (tx) => {
    const transaction = await tx.transaction.create({
      data: { type },
    });

    const items = [];

    for (const item of products) {
      const { productId, quantity } = productInputSchema.parse(item);

      const product = await tx.product.findUnique({
        where: { id: productId },
      });

      if (!product) {
        throw new Error("Product not found");
      }

      if (type === "sale" && product.quantity < quantity) {
        throw new Error(`Insufficient stock for product: ${product.name}`);
      }

      const unitPrice =
        type === "sale" ? product.priceSale : product.pricePurchase;

      const totalPrice = unitPrice * quantity;

      await tx.product.update({
        where: { id: productId },
        data: {
          quantity:
            type === "sale" ? { decrement: quantity } : { increment: quantity },
        },
      });

      const productOnTransaction = await tx.productsOnTransactions.create({
        data: {
          product: { connect: { id: productId } },
          transaction: { connect: { id: transaction.id } },
          quantity,
          unitPrice,
          totalPrice,
        },
      });

      items.push(productOnTransaction);
    }

    return {
      transactionId: transaction.id,
      type,
      items,
    };
  });
};
