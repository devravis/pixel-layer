-- AlterTable
ALTER TABLE "Session" ADD COLUMN "containerMaxWidth" TEXT DEFAULT '1200px';
ALTER TABLE "Session" ADD COLUMN "paddingDesktop" TEXT DEFAULT '20px';
ALTER TABLE "Session" ADD COLUMN "paddingMobile" TEXT DEFAULT '10px';
ALTER TABLE "Session" ADD COLUMN "paddingTablet" TEXT DEFAULT '15px';
