/*
  Warnings:

  - A unique constraint covering the columns `[subjectCode]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objective` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectCode` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherName` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subject` ADD COLUMN `cradits` DOUBLE NOT NULL DEFAULT 0.0,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` TEXT NOT NULL,
    ADD COLUMN `objective` TEXT NOT NULL,
    ADD COLUMN `practiceHours` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `subjectCode` VARCHAR(20) NOT NULL,
    ADD COLUMN `teacherName` VARCHAR(255) NOT NULL,
    ADD COLUMN `theoryHours` INTEGER NOT NULL DEFAULT 0,
    MODIFY `name` VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Subject_subjectCode_key` ON `Subject`(`subjectCode`);
