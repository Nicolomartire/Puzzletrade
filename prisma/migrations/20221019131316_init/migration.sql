/*
  Warnings:

  - Made the column `piece` on table `User1` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User1" ALTER COLUMN "piece" SET NOT NULL,
ALTER COLUMN "piece" SET DATA TYPE TEXT;
