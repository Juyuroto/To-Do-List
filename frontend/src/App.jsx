import { useState } from 'react';
  
// CSS
import "./assets/css/App.css"

// Components
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import KandanCol from './components/KanbanColumn'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header>
        <h1>My Todo</h1>
      </header>
      <main>
        <button className='todo-button' onClick={() => setIsModalOpen(true)}>new</button>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>X</button>
              <AddTodo />
            </div>
          </div>
        )}
        < AddTodo />
        < TodoItem />
        < KandanCol />
      </main>
    </>
  )
}

export default App
