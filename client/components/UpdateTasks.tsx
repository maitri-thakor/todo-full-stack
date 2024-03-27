import { FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { Tasks } from '../../models/tasks'

export function UpdateTasks({ id }: { id: number }) {
  const [updateTasks, setUpdateTasks] = useState('')

  const [editMode, setEditMode] = useState(false)

  const handleEditMode = () => {
    setEditMode(true)
  }
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (updateTasks: { name: string }) =>
      api.updateTask(id, updateTasks),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateTasks(event.target.value)
    console.log(updateTasks)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutation.mutate({ name: updateTasks })
    setUpdateTasks('')
    setEditMode(false)
  }

  return (
    <>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="What needs to be done?"
            onChange={handleChange}
            value={updateTasks}
            id="name"
          ></input>
          <button>Submit</button>
        </form>
      ) : (
        <button onClick={() => handleEditMode()}>Update</button>
      )}
    </>
  )
}
export default UpdateTasks
