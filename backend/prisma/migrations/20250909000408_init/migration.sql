-- CreateTable
CREATE TABLE "cantante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "generoMusical" TEXT NOT NULL,
    "exito" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
