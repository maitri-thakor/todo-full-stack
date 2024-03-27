import { Tasks } from '../../models/tasks'
import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTask } from '../apis/apiClient'
import { useState } from 'react'
import UpdateTasks from './UpdateTasks'

export function TasksList() {
  // const taskFunc = async () => {
  //   const task = await api.fetchTasks()
  //   console.log(task)
  // }
  // taskFunc()

  // const tasks = [
  //   { name: 'Laundry', priority: 5, completed: true },
  //   { name: 'Cooking', priority: 1, completed: true },
  //   { name: 'Movie', priority: 2, completed: false },
  // ] as Tasks[]
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (input: number) => deleteTask(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
  const handleDelete = async (id: number) => {
    mutation.mutate(id)
  }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => api.fetchTasks(),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const tasks = data

  return (
    <>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <span>
              {task.name}
              {/* {task.priority}
    {task.completed} */}
            </span>{' '}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <UpdateTasks id={task.id} />
          </div>
        )
      })}
    </>
  )
}
