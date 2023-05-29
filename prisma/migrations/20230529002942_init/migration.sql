/*
  Warnings:

  - The primary key for the `Village` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_villageId_fkey";

-- DropForeignKey
ALTER TABLE "Village" DROP CONSTRAINT "Village_districtId_fkey";

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "villageId" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Village" DROP CONSTRAINT "Village_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Village_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Village_id_seq";

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_villageId_fkey" FOREIGN KEY ("villageId") REFERENCES "Village"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Village" ADD CONSTRAINT "Village_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;
