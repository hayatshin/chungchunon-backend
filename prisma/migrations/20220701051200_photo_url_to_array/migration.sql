/*
  Warnings:

  - The `photoURL` column on the `Photo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "photoURL",
ADD COLUMN     "photoURL" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Photo_photoURL_key" ON "Photo"("photoURL");
