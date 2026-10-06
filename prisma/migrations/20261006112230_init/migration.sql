-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "achievements" TEXT,
ADD COLUMN     "period" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "links" TEXT;

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "link" TEXT;
