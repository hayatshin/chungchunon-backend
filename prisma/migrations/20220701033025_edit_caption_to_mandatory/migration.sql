/*
  Warnings:

  - Made the column `caption` on table `Feed` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Feed" ALTER COLUMN "caption" SET NOT NULL;
