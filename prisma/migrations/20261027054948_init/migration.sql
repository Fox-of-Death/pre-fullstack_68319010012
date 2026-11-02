/*
  Warnings:

  - You are about to drop the column `majer` on the `student` table. All the data in the column will be lost.
  - Added the required column `major` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `majer`,
    ADD COLUMN `major` VARCHAR(50) NOT NULL;
