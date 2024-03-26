import { Tasks } from '../../models/tasks'
import * as api from '../apis/apiClient'

export function TasksList() {
  // const taskFunc = async () => {
  //   const task = await api.fetchTasks()
  //   console.log(task)
  // }
  // taskFunc()

  const tasks = [
    { name: 'Laundry', priority: 5, completed: true },
    { name: 'Cooking', priority: 1, completed: true },
    { name: 'Movie', priority: 2, completed: false },
  ] as Tasks[]

  return (
    <>
      {tasks.map((task) => {
        return (
          <p key={task.id}>
            {task.name}
            {/* {task.priority} */}
            {/* {task.completed} */}
          </p>
        )
      })}
    </>
  )
}
