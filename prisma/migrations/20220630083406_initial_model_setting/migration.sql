/*
  Warnings:

  - You are about to drop the column `community` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "community";

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "feedId" INTEGER NOT NULL,
    "useId" INTEGER NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feed" (
    "id" SERIAL NOT NULL,
    "useId" INTEGER NOT NULL,
    "caption" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coummunity" (
    "id" SERIAL NOT NULL,
    "useId" INTEGER NOT NULL,
    "communityName" TEXT NOT NULL,

    CONSTRAINT "Coummunity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_useId_fkey" FOREIGN KEY ("useId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_feedId_fkey" FOREIGN KEY ("feedId") REFERENCES "Feed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_useId_fkey" FOREIGN KEY ("useId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coummunity" ADD CONSTRAINT "Coummunity_useId_fkey" FOREIGN KEY ("useId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
