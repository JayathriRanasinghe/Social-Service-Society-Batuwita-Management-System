CREATE DATABASE IF NOT EXISTS social_service_association_batuwita;

USE social_service_association_batuwita;

CREATE TABLE IF NOT EXISTS Members (
  member_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  contact_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) UNIQUE,
  is_board_member BOOLEAN DEFAULT FALSE,
  start_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS Board_Members (
  member_id INT PRIMARY KEY,
  start_term DATE NOT NULL,
  end_term DATE DEFAULT NULL,
  title VARCHAR(255) NOT NULL,
  FOREIGN KEY (member_id) REFERENCES Members(member_id)
);

CREATE TABLE IF NOT EXISTS Payments (
  payment_id INT PRIMARY KEY AUTO_INCREMENT,
  member_id INT NOT NULL,
  payment_date DATE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (member_id) REFERENCES Members(member_id)
);

CREATE TABLE IF NOT EXISTS Funeral_Assistance (
  assistance_id INT PRIMARY KEY AUTO_INCREMENT,
  member_id INT NOT NULL,
  date_of_death DATE NOT NULL,
  beneficiary_name VARCHAR(255) NOT NULL,
  relationship VARCHAR(255) NOT NULL,
  assistance_amount DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (member_id) REFERENCES Members(member_id)
);
