import React, { useState, useEffect } from "react";
import "./index.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  const validate = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return "Please enter a task before adding.";
    if (trimmed.length < 6) return "Task must be at least 6 characters long.";
    return null;
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
    setError("");
  };

  const addTask = () => {
    const msg = validate(newTask);
    if (msg) return setError(msg);

    setTasks([...tasks, { text: newTask.trim(), checked: false }]);
    setNewTask("");
  };

  const updateTask = (index) => {
    const msg = validate(editValue);
    if (msg) return setError(msg);

    setTasks((prev) =>
      prev.map((t, i) => (i === index ? { ...t, text: editValue.trim() } : t))
    );

    setIsEditing(null);
    setEditValue("");
    setError("");
  };

  const toggleTask = (index) =>
    setTasks((prev) =>
      prev.map((t, i) => (i === index ? { ...t, checked: !t.checked } : t))
    );

  const deleteTask = (index) =>
    setTasks(tasks.filter((_, i) => i !== index));

  const moveTask = (index, dir) => {
    const newIndex = index + dir;
    if (newIndex < 0 || newIndex >= tasks.length) return;

    const copy = [...tasks];
    [copy[index], copy[newIndex]] = [copy[newIndex], copy[index]];
    setTasks(copy);
  };

  const truncateText = (text, len = 80) =>
    text.length > len ? text.slice(0, len) + ".." : text;

  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1000
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onResize = () => setIsMobileView(window.innerWidth <= 1000);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setTasks((prev) =>
      prev.map((t) => {
        const base = t.text.trimEnd();

        if (isMobileView && base.length > 20 && base.length <= 80)
          return { ...t, text: base + " ".repeat(61 - base.length) };

        if (!isMobileView && t.text.length > base.length)
          return { ...t, text: base };

        return t;
      })
    );
  }, [isMobileView]);

  return (
    <div className="todo-list">
      <div className="input-section">
        <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <ol>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {isEditing === index ? (
              <>
                <input type="checkbox" checked={task.checked} onChange={() => toggleTask(index)}/>
                <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} className="todo-input"/>

                <button className="save-button" onClick={() => updateTask(index)}>Save</button>
                <button className="cancel-button" onClick={() => setIsEditing(null)}>Cancel</button>
              </>
            ) : (
              <>
                <input className="box" type="checkbox" checked={task.checked} onChange={() => toggleTask(index)}/>
                <span className="text" onClick={() => toggleTask(index)} style={{ 
                    marginLeft: "8px", 
                    textDecoration: task.checked ? "line-through" : "none", 
                    cursor: "pointer",}}>
                  {truncateText(task.text)}
                </span>

                {task.text.length > 60 && (
                  <button className="more-button" onClick={() => setSelectedTask(task.text)}>
                    +
                  </button>
                )}
                <button className="edit-button" onClick={() => { setIsEditing(index); setEditValue(task.text);}}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button className="move-button" onClick={() => moveTask(index, -1)}>
                  Up
                </button>
                <button className="move-button" onClick={() => moveTask(index, +1)}>
                  Down
                </button>
              </>
            )}
          </li>
        ))}
      </ol>

      {selectedTask && (
        <div className="modal-overlay" onClick={() => setSelectedTask(null)}>
          <div className="message-content" onClick={(e) => e.stopPropagation()}>
            <p>{selectedTask}</p>
            <button className="add-button" onClick={() => setSelectedTask(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDoList;