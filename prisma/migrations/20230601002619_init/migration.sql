-- CreateTable
CREATE TABLE "ToDo" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "userId" VARCHAR(2000) NOT NULL,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "text" VARCHAR(2000) NOT NULL,
    "userId" VARCHAR(2000) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
