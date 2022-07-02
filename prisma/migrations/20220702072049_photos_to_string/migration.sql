/*
  Warnings:

  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_feedId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_useId_fkey";

-- AlterTable
ALTER TABLE "Feed" ADD COLUMN     "photos" TEXT[];

-- DropTable
DROP TABLE "Photo";
