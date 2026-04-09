import React, { useState } from 'react';
import { createTodo } from '../api';

export default function AddTodo({ onTodoAdded }) {
  const [val, setVal] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!val.trim()) return;

    const res = await createTodo({ title: val, status: "todo" });
    onTodoAdded(res);
    setVal("");
  };

  return (
    <form onSubmit={submit} className="add-todo-form">
      <input 
        value={val} 
        onChange={e => setVal(e.target.value)} 
        placeholder="Quoi de neuf ?" 
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}