/*
  Warnings:

  - You are about to drop the column `useId` on the `Coummunity` table. All the data in the column will be lost.
  - You are about to drop the column `useId` on the `Feed` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Coummunity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Feed` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Coummunity" DROP CONSTRAINT "Coummunity_useId_fkey";

-- DropForeignKey
ALTER TABLE "Feed" DROP CONSTRAINT "Feed_useId_fkey";

-- AlterTable
ALTER TABLE "Coummunity" DROP COLUMN "useId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Feed" DROP COLUMN "useId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coummunity" ADD CONSTRAINT "Coummunity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
