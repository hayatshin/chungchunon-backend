/*
  Warnings:

  - You are about to drop the column `directComment` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `directFeed` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `directLike` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "directComment",
DROP COLUMN "directFeed",
DROP COLUMN "directLike";
