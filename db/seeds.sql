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
    ('chemistry', 60000, 1),
    ('biology', 60000, 1),
    ('english I', 55000, 3),
    ('physics', 60000, 1),
    ('debate', 55000, 3),
    ('computer science', 62000, 2),
    ('digital media', 62000, 2);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Fraser', 'chemistry', 'John Doe'),
    ('Jack', 'London', 'biology', 'John Doe'),
    ('Robert', 'Bruce', 'physics', 'John Doe'),
    ('Peter', 'Greenaway', 'english I', 'Ashley Rollins'),
    ('Derek', 'Jarman', 'debate', 'Ashley Rollins'),
    ('Paolo', 'Pasolini', 'computer science', 'Victoria Crane'),
    ('Heathcote', 'Williams', 'digital media', 'Victoria Crane'),
    ('Hubert', 'Crackanthorpe', 'math', 'Susan Hill'),
    ('William', 'Carleton', 'math', 'Susan Hill'),
    ('Gerald', 'Griffin', 'math', 'Susan Hill');