-- CreateTable
CREATE TABLE "Pedometer" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "stepCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedometer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pedometer" ADD CONSTRAINT "Pedometer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
