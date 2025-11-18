import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./log/login.jsx";
import Signup from "./log/signup.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={<Login onLogin={() => setIsLogged(true)} />} 
        />
        <Route 
          path="/signup"
          element={<Signup />} 
        />
        <Route 
          path="/" 
          element={
            isLogged ? <ToDoListWrapper onLogout={() => setIsLogged(false)} /> : <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  );
}

function ToDoListWrapper({ onLogout }) {
  return (
    <div>
      <div className="todo-header">
        <h1>To-Do List</h1>
        <button className="add-button logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
      <ToDoList/>
    </div>
  );
}

export default App;