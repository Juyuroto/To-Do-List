// Import React
import { useState } from 'react';
  
// Import CSS
import "./assets/css/App.css"

// Import Components
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import KanbanBoard from './components/KanbanBoard'
import KanbanColumn from './components/KanbanColumn'

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
        < TodoItem />
        < KanbanBoard />
        < KanbanColumn />
      </main>
    </>
  )
}

export default App
