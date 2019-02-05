CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

-- had incomplet SQL language in submission
INSERT INTO "projects" ("name", "description", "thumbnail",
                        "website", "github", "date_completed", "tag_id")
VALUES ('portfolio master', 'project using sagas', '/images/SagasPortfoli.png', 
'www.heroku.com', 'wwww.github.com', '01-01-2019', '3');




CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" varchar,
    "tag_id" INT REFERENCES "tags"
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');