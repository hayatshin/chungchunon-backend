/*
  Warnings:

  - You are about to drop the `PoemComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PoemLike` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PoemComment" DROP CONSTRAINT "PoemComment_poemId_fkey";

-- DropForeignKey
ALTER TABLE "PoemComment" DROP CONSTRAINT "PoemComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "PoemLike" DROP CONSTRAINT "PoemLike_poemId_fkey";

-- DropForeignKey
ALTER TABLE "PoemLike" DROP CONSTRAINT "PoemLike_userId_fkey";

-- DropTable
DROP TABLE "PoemComment";

-- DropTable
DROP TABLE "PoemLike";

-- CreateTable
CREATE TABLE "Poemlike" (
    "id" SERIAL NOT NULL,
    "poemId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Poemlike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Poemcomment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "poemId" INTEGER NOT NULL,
    "payload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Poemcomment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Poemlike_poemId_userId_key" ON "Poemlike"("poemId", "userId");

-- AddForeignKey
ALTER TABLE "Poemlike" ADD CONSTRAINT "Poemlike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Poemlike" ADD CONSTRAINT "Poemlike_poemId_fkey" FOREIGN KEY ("poemId") REFERENCES "Poem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Poemcomment" ADD CONSTRAINT "Poemcomment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Poemcomment" ADD CONSTRAINT "Poemcomment_poemId_fkey" FOREIGN KEY ("poemId") REFERENCES "Poem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
