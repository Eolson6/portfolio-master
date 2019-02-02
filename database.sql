CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('project name', 'project description', 'project thumbnail', 'project website', 'project github', '01-01-2019' , 2);
VALUES ('project2', 'project 2', 'project 2', 'project website 2', 'project github 2', '01-01-2019' , 1);
VALUES ('project3', 'project 3', 'project 3', 'project website 3', 'project github 3', '01-01-2019' , 1);

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