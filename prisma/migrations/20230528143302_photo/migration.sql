/*
  Warnings:

  - Added the required column `logoUrl` to the `Merchant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photoUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Merchant" ADD COLUMN     "logoUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "imageUrls" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "photoUrl" TEXT NOT NULL;
