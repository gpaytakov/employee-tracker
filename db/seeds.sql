INSERT INTO department
    (department_name)
VALUES
    ('science'),
    ('technology'), 
    ('ela'),
    ('math');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('chemistry', 65000, 1),
    ('biology', 60000, 1),
    ('english I', 55000, 3),
    ('physics', 60000, 1),
    ('debate', 55000, 3,
    ('computer science', 62000, 2),
    ('digital media', 62000, 2),
    ('algebra', 61000, 4),
    ('geometry', 61000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Fraser', 1, NULL),
    ('Jack', 'London', 2 , 1),
    ('Robert', 'Bruce', 4 , 1),
    ('Peter', 'Greenaway', 3, NULL),
    ('Derek', 'Jarman', 5 , 4),
    ('Paolo', 'Pasolini', 6, 7),
    ('Heathcote', 'Williams', 7 , NULL),
    ('Hubert', 'Crackanthorpe', 7, 7),
    ('William', 'Carleton', 8 , NULL),
    ('Gerald', 'Griffin', 8 , 9);