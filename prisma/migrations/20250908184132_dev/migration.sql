/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "tincome" INTEGER NOT NULL DEFAULT 0,
    "tspent" INTEGER NOT NULL DEFAULT 0,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Addfundwallet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "accountNum" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "swiftcode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    CONSTRAINT "Addfundwallet_id_fkey" FOREIGN KEY ("id") REFERENCES "Addfund" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Addfund" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "statue" TEXT NOT NULL DEFAULT 'PENDING',
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Addfund_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Intertransfer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "accountNum" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "bankaddress" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "statue" TEXT NOT NULL DEFAULT 'PENDING',
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "discription" TEXT,
    CONSTRAINT "Intertransfer_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Localtransfer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "accountNum" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "statue" TEXT NOT NULL DEFAULT 'PENDING',
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "discription" TEXT,
    CONSTRAINT "Localtransfer_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "expire" INTEGER NOT NULL,
    "cardnum" TEXT NOT NULL,
    "ccv" TEXT NOT NULL,
    "statue" TEXT NOT NULL DEFAULT 'PENDING',
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Card_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");
