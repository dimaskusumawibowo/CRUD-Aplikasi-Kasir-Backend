/*
  Warnings:

  - Added the required column `updateAt` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `updateAt` DATETIME(3) NOT NULL;
