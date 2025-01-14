import connection from './connection'
import { Tasks, updatedTask } from '../../models/tasks'

const db = connection

export function getTasks(): Promise<Tasks[]> {
  return db('tasks').select()
}

export function getTasksById(id: number): Promise<Tasks> {
  return db('tasks').where({ id }).select().first()
}

export function addTasks(newTasksObj: Tasks) {
  return db('tasks').insert(newTasksObj)
}

export function updateTask(id: number, updatedTask: updatedTask) {
  return db('tasks').where({ id }).update(updatedTask).returning('*')
}

export function deleteTasks(id: number) {
  return db('tasks').where({ id }).del()
}
