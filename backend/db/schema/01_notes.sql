DROP TABLE IF EXISTS notes CASCADE;
CREATE TABLE notes(
    id SERIAL PRIMARY KEY NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
);