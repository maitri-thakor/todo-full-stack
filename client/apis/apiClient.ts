import request from 'superagent'
import { Tasks, Task } from '../../models/tasks'

const rootUrl = 'api/v1/tasks'

export async function fetchTasks(): Promise<Tasks[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function getTasksById(id: number): Promise<Tasks> {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function addTasks(newTasks: Task): Promise<Task[]> {
  console.log(newTasks)
  const res = await request.post(rootUrl).send({ newTasks })
  console.log(res.body)
  return res.body
}

export async function updateTask(
  id: number,
  newTask: Partial<Tasks>,
): Promise<Tasks> {
  const res = await request.patch(`${rootUrl}/${id}`).send(newTask)
  return res.body
}

export async function deleteTask(id: number): Promise<Tasks[]> {
  const res = await request.delete(`${rootUrl}/${id}`)
  return res.body
}
