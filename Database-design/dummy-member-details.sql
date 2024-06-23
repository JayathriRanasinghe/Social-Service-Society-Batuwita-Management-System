-- Insert Members (10 total, including President, Secretary, Treasurer)
INSERT INTO Members (first_name, last_name, contact_number, email, is_board_member, start_date)
VALUES
  ('John', 'Doe', '555-123-4567', 'john.doe@example.com', 1, '2023-01-01'),  -- President (is_board_member = 1)
  ('Jane', 'Smith', '555-789-0123', 'jane.smith@example.com', 1, '2022-05-15'),  -- Secretary (is_board_member = 1)
  ('Mike', 'Lee', '555-456-7890', 'mike.lee@example.com', 1, '2023-02-10'),   -- Treasurer (is_board_member = 1)
  ('Alice', 'Young', '555-987-6543', 'alice.young@example.com', 0, '2023-03-15'),
  ('Bob', 'Johnson', '555-321-0987', 'bob.johnson@example.com', 0, '2023-02-20'),
  ('Charlie', 'Brown', '555-543-2109', 'charlie.brown@example.com', 0, '2023-01-10'),
  ('David', 'Miller', '555-765-4321', 'david.miller@example.com', 0, '2023-04-01'),
  ('Emily', 'Garcia', '555-908-6754', 'emily.garcia@example.com', 0, '2023-02-05'),
  ('Frank', 'Williams', '555-234-5678', 'frank.williams@example.com', 0, '2023-03-25'),
  ('Grace', 'Robinson', '555-112-3456', 'grace.robinson@example.com', 0, '2023-01-15');

-- Assign Board Member Titles (using member email for reference)
INSERT INTO Board_Members (member_id, start_term, end_term, title)
SELECT member_id, '2023-01-01', NULL, 'President'  -- John Doe (President)
FROM Members
WHERE email = 'john.doe@example.com'

UNION ALL

SELECT member_id, '2023-01-01', NULL, 'Secretary'  -- Jane Smith (Secretary)
FROM Members
WHERE email = 'jane.smith@example.com'

UNION ALL

SELECT member_id, '2023-01-01', NULL, 'Treasurer'  -- Mike Lee (Treasurer)
FROM Members
WHERE email = 'mike.lee@example.com';

-- Insert Financial Records (20 total, distributed among members)
-- Payment 1 (John Doe)
INSERT INTO Payments (member_id, payment_date, amount)
VALUES (1, '2024-03-30', 30.00);

-- Payment 2 (Jane Smith)
INSERT INTO Payments (member_id, payment_date, amount)
VALUES (2, '2024-02-15', 25.50);

-- Payments 3-10 (Modify member_id, date, and amount)
INSERT INTO Payments (member_id, payment_date, amount)
VALUES (3, '2024-01-10', 18.75),  -- Mike Lee
       (4, '2024-03-15', 42.00),  -- Alice Young
       (5, '2024-02-25', 37.25),  -- Bob Johnson
       (6, '2024-02-01', 21.50),  -- Charlie Brown
       (7, '2024-04-05', 50.00),  -- David Miller
       (8, '2024-03-20', 15.00),  -- Emily Garcia (assuming she's still a member)
       (9, '2024-01-20', 28.00),  -- Frank Williams (assuming he's still a member)
       (10, '2024-03-25', 60.00);  -- Grace Robinson

-- Funeral Assistance 1 (Alice Young - Member ID 4)
INSERT INTO Funeral_Assistance (member_id, date_of_death, beneficiary_name, relationship, assistance_amount)
VALUES (4, '2024-03-10', 'Mother', 'Parent', 1500.00);

-- Funeral Assistance 2 (Grace Robinson - Member ID 10)
INSERT INTO Funeral_Assistance (member_id, date_of_death, beneficiary_name, relationship, assistance_amount)
VALUES (10, '2024-02-20', 'Brother', 'Sibling', 1200.00);  -- Modify date_of_death and beneficiary details as needed





