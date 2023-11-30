INSERT INTO users
    (id, username, email, first_name, last_name, password)
VALUES (
     nextval('users_id_seq'),
     'Ivan123',
     'vanyalssl@gmail.com',
     'Ivan',
     'Nepotachev',
     '1123456789'
) RETURNING *