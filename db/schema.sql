CREATE TABLE "job" (
"id"  SERIAL,
"customer" VARCHAR(200) NOT NULL,
"time_range" INTERVAL NOT NULL,
"id_vehicle" INTEGER,
PRIMARY KEY ("id")
);

CREATE TABLE "vehicle" (
"id"  SERIAL,
"name" VARCHAR(100) NOT NULL DEFAULT 'Anonymous Vehicle',
"start" TIME NOT NULL DEFAULT '07:00:00',
"stop" TIME NOT NULL DEFAULT '18:00:00',
PRIMARY KEY ("id")
);

ALTER TABLE "job" ADD FOREIGN KEY ("id_vehicle") REFERENCES "vehicle" ("id");