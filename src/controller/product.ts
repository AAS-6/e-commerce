import { prisma } from "@/lib/prisma";

export const getPreview = async () => {
  const product = prisma.product
    .findMany({})
    .then(product => product)
    .catch(error => {
      console.log(error);
    });

  return product;
};
