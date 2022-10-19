-- CreateTable
CREATE TABLE "User1" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "User1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Puzzle1" (
    "id" SERIAL NOT NULL,
    "namnpuzzle" TEXT NOT NULL,
    "descripton" TEXT,
    "pieces" INTEGER NOT NULL,
    "condition" INTEGER,
    "picture" TEXT,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Puzzle1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User1_email_key" ON "User1"("email");

-- AddForeignKey
ALTER TABLE "Puzzle1" ADD CONSTRAINT "Puzzle1_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
