use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

--Create insert for employee
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Joshua', 'Brooks', 4, 5),
    ('James', 'Petty', 2, 2),
    ('Pat', 'Smith', 6, 2),
    ('Mike', 'Richey', 8, 5),
    ('Tiger', 'King', 1,5);
    
-- INSERT INTO manager
--     (first_name, last_name, role_id)
-- VALUES
--     ('Walt', 'Disney', 1),
--     ('Bill', 'Lumbergh', 3),
--     ('Martha', 'Stewart', 5),
--     ('Steve', 'Jobs', 7);
