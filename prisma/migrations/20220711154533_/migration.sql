/*
  Warnings:

  - You are about to drop the `Coummunity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Coummunity" DROP CONSTRAINT "Coummunity_userId_fkey";

-- DropTable
DROP TABLE "Coummunity";

-- CreateTable
CREATE TABLE "Community" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "communityName" TEXT NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityOnUser" (
    "userId" INTEGER NOT NULL,
    "commnunityId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommunityOnUser_pkey" PRIMARY KEY ("userId","commnunityId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Community_communityName_key" ON "Community"("communityName");

-- AddForeignKey
ALTER TABLE "CommunityOnUser" ADD CONSTRAINT "CommunityOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityOnUser" ADD CONSTRAINT "CommunityOnUser_commnunityId_fkey" FOREIGN KEY ("commnunityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
