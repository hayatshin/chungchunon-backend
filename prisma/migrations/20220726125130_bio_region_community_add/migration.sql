/*
  Warnings:

  - Made the column `region` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bio` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `communityId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "region" SET NOT NULL,
ALTER COLUMN "bio" SET NOT NULL,
ALTER COLUMN "communityId" SET NOT NULL;
