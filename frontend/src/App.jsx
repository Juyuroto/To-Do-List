// Import CSS
import "./assets/css/App.css"
import "./assets/css/kandan.css"

// Import Components
import KanbanBoard from './components/KanbanBoard'

import logo from './assets/icons/Todo.svg' 

function App() {

  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <img src={logo} alt="Logo My Todo" className="app-logo" />
          <h1>My Todo</h1>
        </div>
      </header>
      <main>
        <KanbanBoard />
      </main>
    </>
  )
}

export default App