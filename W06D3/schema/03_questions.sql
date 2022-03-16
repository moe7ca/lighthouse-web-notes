-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS questions CASCADE;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question VARCHAR(255) NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id)
);
