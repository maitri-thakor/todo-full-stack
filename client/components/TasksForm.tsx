import { FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { Tasks } from '../../models/tasks'

export function TaskForm() {
  const [newTasks, setNewTasks] = useState('')
  // const [submittedTasks, setsubmittedTasks] = useState('')
  // const [priority, setPriority] = useState('')
  // const [completed, setCompleted] = useState(false)

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (newTasks: { name: string }) => api.addTasks(newTasks),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTasks(event.target.value)
    console.log(newTasks)
  }

  // const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPriority(event.target.value)
  // }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutation.mutate({ name: newTasks })
    setNewTasks('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={handleChange}
          value={newTasks}
          id="name"
        ></input>
        <button>Submit</button>
      </form>
    </>
  )
}
export default TaskForm
