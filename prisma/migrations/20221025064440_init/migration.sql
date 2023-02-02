-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "counties" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "countryUuid" TEXT NOT NULL,

    CONSTRAINT "counties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "countyUuid" TEXT NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "districts" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "ubigeo" VARCHAR NOT NULL,
    "cityUuid" TEXT NOT NULL,

    CONSTRAINT "districts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "countries_uuid_key" ON "countries"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "countries_code_key" ON "countries"("code");

-- CreateIndex
CREATE UNIQUE INDEX "counties_uuid_key" ON "counties"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "counties_code_key" ON "counties"("code");

-- CreateIndex
CREATE UNIQUE INDEX "cities_uuid_key" ON "cities"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "cities_code_key" ON "cities"("code");

-- CreateIndex
CREATE UNIQUE INDEX "districts_uuid_key" ON "districts"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "districts_code_key" ON "districts"("code");

-- AddForeignKey
ALTER TABLE "counties" ADD CONSTRAINT "counties_countryUuid_fkey" FOREIGN KEY ("countryUuid") REFERENCES "countries"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_countyUuid_fkey" FOREIGN KEY ("countyUuid") REFERENCES "counties"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "districts" ADD CONSTRAINT "districts_cityUuid_fkey" FOREIGN KEY ("cityUuid") REFERENCES "cities"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
