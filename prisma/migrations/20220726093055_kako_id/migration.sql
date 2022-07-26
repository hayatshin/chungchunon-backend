/*
  Warnings:

  - Made the column `kakaoId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "kakaoId" SET NOT NULL;
