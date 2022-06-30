/*
  Warnings:

  - A unique constraint covering the columns `[communityName]` on the table `Coummunity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Coummunity_communityName_key" ON "Coummunity"("communityName");
