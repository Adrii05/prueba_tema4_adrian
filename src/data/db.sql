DROP DATABASE IF EXISTS hospital;

CREATE DATABASE hospital;
USE hospital;


CREATE TABLE medicos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    especialidad VARCHAR(50),
    perfil ENUM ('RESIDENTE', 'ESPECIALISTA') NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE medicos ADD COLUMN imagen VARCHAR(200) AFTER especialidad;

INSERT INTO medicos (nombre, especialidad, perfil) 
VALUES 
  ('Alfredo', 'Atención primaria', 'RESIDENTE'),
  ('Paco', 'traumatólogo', 'ESPECIALISTA'),
  ('Gustavo', 'dermatólogo', 'RESIDENTE');


CREATE TABLE pacientes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    localidad VARCHAR(50),
    fecha_nacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE medicos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO pacientes (nombre, localidad, fecha_nacimiento) 
VALUES 
  ('Pedro', 'Lucena', '1985-12-05'),
  ('Julio', 'Monturque', '2003-08-15'),
  ('María', 'Puente Genil', '1970-10-25');
