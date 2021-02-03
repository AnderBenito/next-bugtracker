/*
  Warnings:

  - You are about to drop the column `backgroundColor` on the `Dashboard` table. All the data in the column will be lost.
  - You are about to drop the column `dashboardId` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_dashboardId_fkey";

-- AlterTable
ALTER TABLE "Dashboard" DROP COLUMN "backgroundColor",
ADD COLUMN     "color" TEXT;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "dashboardId",
ADD COLUMN     "listId" TEXT;

-- CreateTable
CREATE TABLE "List" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "color" TEXT,
    "dashboardId" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "List" ADD FOREIGN KEY ("dashboardId") REFERENCES "Dashboard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE SET NULL ON UPDATE CASCADE;
