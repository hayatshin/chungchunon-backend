/*
  Warnings:

  - Added the required column `birthyear` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthyear" TEXT NOT NULL,
ALTER COLUMN "age" SET DATA TYPE TEXT;
