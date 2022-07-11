/*
  Warnings:

  - You are about to drop the column `userId` on the `Community` table. All the data in the column will be lost.
  - Added the required column `communityId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Community" DROP CONSTRAINT "Community_userId_fkey";

-- AlterTable
ALTER TABLE "Community" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "communityId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;
