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
UPDATE Board_Members bm
INNER JOIN Members m ON bm.member_id = m.member_id
SET bm.title = 'President'
WHERE m.email = 'john.doe@example.com';

UPDATE Board_Members bm
INNER JOIN Members m ON bm.member_id = m.member_id
SET bm.title = 'Secretary'
WHERE m.email = 'jane.smith@example.com';

UPDATE Board_Members bm
INNER JOIN Members m ON bm.member_id = m.member_id
SET bm.title = 'Treasurer'
WHERE m.email = 'mike.lee@example.com';

-- Insert Financial Records (20 total, distributed among members)
INSERT INTO Payments (member_id, payment_date, amount)
SELECT member_id,
       DATE_ADD(start_date, INTERVAL FLOOR(RAND() * 12) MONTH),  -- Random date within 1 year of start_date
       ROUND(RAND() * 50 + 10, 2)  -- Random amount between $10 and $60
FROM Members
CROSS JOIN (
  SELECT 1 AS dummy
  FROM (SELECT 1 AS n UNION ALL SELECT 1) AS dummy_table  -- Generate 20 rows
  CROSS JOIN (SELECT 1 AS n UNION ALL SELECT 1) AS dummy_table
);
