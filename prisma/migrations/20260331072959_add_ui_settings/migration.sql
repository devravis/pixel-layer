/*
  Warnings:

  - You are about to drop the column `containerMaxWidth` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `paddingDesktop` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `paddingMobile` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `paddingTablet` on the `Session` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" DATETIME,
    "accessToken" TEXT NOT NULL,
    "userId" BIGINT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "accountOwner" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT,
    "collaborator" BOOLEAN DEFAULT false,
    "emailVerified" BOOLEAN DEFAULT false,
    "refreshToken" TEXT,
    "refreshTokenExpires" DATETIME,
    "primary" TEXT NOT NULL DEFAULT '#673ee5',
    "secondary" TEXT NOT NULL DEFAULT '#e91e63',
    "success" TEXT NOT NULL DEFAULT '#4caf50',
    "danger" TEXT NOT NULL DEFAULT '#f44336',
    "warning" TEXT NOT NULL DEFAULT '#ff9800',
    "info" TEXT NOT NULL DEFAULT '#2196f3',
    "white" TEXT NOT NULL DEFAULT '#ffffff',
    "black" TEXT NOT NULL DEFAULT '#000000',
    "dark" TEXT NOT NULL DEFAULT '#212121'
);
INSERT INTO "new_Session" ("accessToken", "accountOwner", "black", "collaborator", "danger", "dark", "email", "emailVerified", "expires", "firstName", "id", "info", "isOnline", "lastName", "locale", "primary", "refreshToken", "refreshTokenExpires", "scope", "secondary", "shop", "state", "success", "userId", "warning", "white") SELECT "accessToken", "accountOwner", "black", "collaborator", "danger", "dark", "email", "emailVerified", "expires", "firstName", "id", "info", "isOnline", "lastName", "locale", "primary", "refreshToken", "refreshTokenExpires", "scope", "secondary", "shop", "state", "success", "userId", "warning", "white" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
