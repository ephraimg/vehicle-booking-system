CREATE TABLE "booking" (
"id"  SERIAL ,
"id_truck" INTEGER ,
"id_job" INTEGER ,
"start" TIMESTAMP NOT NULL ,
"end" TIMESTAMP NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "job" (
"id"  SERIAL ,
"customer" VARCHAR(200) NOT NULL ,
"start" TIMESTAMP NOT NULL ,
"duration" INTERVAL NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "truck" (
"id"  SERIAL ,
"name" VARCHAR(100) NOT NULL DEFAULT 'Anonymous Truck' ,
"start" TIME NOT NULL DEFAULT '07:00:00' ,
"end" TIME NOT NULL DEFAULT '18:00:00' ,
PRIMARY KEY ("id")
);

ALTER TABLE "booking" ADD FOREIGN KEY ("id_truck") REFERENCES "truck" ("id");
ALTER TABLE "booking" ADD FOREIGN KEY ("id_job") REFERENCES "job" ("id");