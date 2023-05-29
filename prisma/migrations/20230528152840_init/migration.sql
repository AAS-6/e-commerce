/*
  Warnings:

  - You are about to drop the column `kecamatan` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `kelurahan` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `kota` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `provinsi` on the `Address` table. All the data in the column will be lost.
  - Added the required column `districtId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provinceId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regencyId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `villageId` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "kecamatan",
DROP COLUMN "kelurahan",
DROP COLUMN "kota",
DROP COLUMN "provinsi",
ADD COLUMN     "districtId" INTEGER NOT NULL,
ADD COLUMN     "provinceId" INTEGER NOT NULL,
ADD COLUMN     "regencyId" INTEGER NOT NULL,
ADD COLUMN     "villageId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_villageId_fkey" FOREIGN KEY ("villageId") REFERENCES "Village"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_regencyId_fkey" FOREIGN KEY ("regencyId") REFERENCES "Regency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
