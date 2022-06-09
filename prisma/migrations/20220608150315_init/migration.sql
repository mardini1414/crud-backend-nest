/*
  Warnings:

  - Made the column `address` on table `student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `student` MODIFY `address` TEXT NOT NULL;
