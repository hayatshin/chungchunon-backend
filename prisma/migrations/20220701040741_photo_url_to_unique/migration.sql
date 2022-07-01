/*
  Warnings:

  - A unique constraint covering the columns `[photoURL]` on the table `Photo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Photo_photoURL_key" ON "Photo"("photoURL");
