// Import CSS
import "./assets/css/App.css"
import "./assets/css/kandan.css"

// Import Components
import KanbanBoard from './components/KanbanBoard'


function App() {

  return (
    <>
      <header>
        <h1>My Todo</h1>
      </header>
      <main>
        < KanbanBoard />
      </main>
    </>
  )
}

export default App
