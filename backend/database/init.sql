CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(20),
    description VARCHAR(100),
    status VARCHAR(20) DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'done')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);