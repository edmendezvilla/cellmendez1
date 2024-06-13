-- CreateTable
CREATE TABLE "Phones" (
    "id" UUID NOT NULL,
    "model" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,

    CONSTRAINT "Phones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Phones_model_key" ON "Phones"("model");
