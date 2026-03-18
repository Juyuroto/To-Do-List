CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(20),
    description VARCHAR(100),
    status BOOLEAN,
    created_at TIMESTAMPTZ DEFAULT NOW()
);