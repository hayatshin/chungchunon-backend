/*
  Warnings:

  - Added the required column `directComment` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directFeed` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directLike` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "directComment" INTEGER NOT NULL,
ADD COLUMN     "directFeed" INTEGER NOT NULL,
ADD COLUMN     "directLike" INTEGER NOT NULL;
