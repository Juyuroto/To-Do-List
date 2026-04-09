import React, { useState } from 'react';
import { createTodo } from '../api';

export default function AddTodo({ onTodoAdded }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const res = await createTodo({ title: title, description: desc, status: "todo" });
    onTodoAdded(res);
    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={submit} className="add-todo-form">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titre..." />
      <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description..." />
      <button type="submit">Ajouter</button>
    </form>
  );
}