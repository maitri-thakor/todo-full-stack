import AddTodo from './AddTodo.tsx'
import { TaskForm } from './TasksForm.tsx'
import { TasksList } from './TasksList.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        {/* <AddTodo /> */}
        <TasksList />
        <TaskForm />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
