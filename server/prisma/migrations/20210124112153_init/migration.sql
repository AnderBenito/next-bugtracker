-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "labels" TEXT[],
    "colorLabel" TEXT,
    "dashboardId" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD FOREIGN KEY ("dashboardId") REFERENCES "Dashboard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
