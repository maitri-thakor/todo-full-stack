import { useState } from 'react'

export function TaskForm() {
  const [newTasks, setNewTasks] = useState('')
  const [submittedTasks, setsubmittedTasks] = useState('')

  const handleChange = (e) => {
    setNewTasks(e.target.value)
  }

  const handleSubmit = (e) => {
    setsubmittedTasks(newTasks)
    e.preventDefault()
    setNewTasks('')
  }

  return (
    <>
      <p>New Task: {newTasks}</p>
      <p>Submitted Task: {submittedTasks}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} value={newTasks} id="name"></input>
        <button>Submit</button>
      </form>
    </>
  )
}
