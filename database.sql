CREATE TABLE owners (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(80) NOT NULL,
  lastName VARCHAR(120) NOT NULL
  );

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  breed VARCHAR(120) NOT NULL,
  color VARCHAR(30),
  owner_id INT REFERENCES owners
);

CREATE TABLE visits (
  id SERIAL PRIMARY KEY,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL
);


INSERT INTO pets (name, breed, color, owner_id)
VALUES ('Sparky', 'lab', 'purple',1),
('Mugsy', 'Chihuahua', 'green',2);
