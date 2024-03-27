import { FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { Tasks } from '../../models/tasks'

export function UpdateTasks() {
  const [updateTasks, setUpdateTasks] = useState('')
  // const [submittedTasks, setsubmittedTasks] = useState('')
  // const [priority, setPriority] = useState('')
  // const [completed, setCompleted] = useState(false)

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (updateTasks) => api.updateTask(id, updateTasks),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  // const useMutateTodo = () => {
  //   const queryClient = useQueryClient()

  //   return useMutation({
  //     mutationFn: editTodo,
  //     // Notice the second argument is the variables object that the `mutate` function receives
  //     onSuccess: (data, variables) => {
  //       queryClient.setQueryData(['todo', { id: variables.id }], data)
  //     },
  //   })
  // }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateTasks(event.target.value)
    console.log(updateTasks)
  }

  // const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPriority(event.target.value)
  // }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutation.mutate({ name: updateTasks })
    setUpdateTasks('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={handleChange}
          value={updateTasks}
          id="name"
        ></input>
        <button>Submit</button>
      </form>
    </>
  )
}
export default UpdateTasks
