/*
  Warnings:

  - You are about to drop the `CommunityOnUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CommunityOnUser" DROP CONSTRAINT "CommunityOnUser_commnunityId_fkey";

-- DropForeignKey
ALTER TABLE "CommunityOnUser" DROP CONSTRAINT "CommunityOnUser_userId_fkey";

-- DropTable
DROP TABLE "CommunityOnUser";

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
