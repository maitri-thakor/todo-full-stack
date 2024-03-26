import request from 'superagent'
import { Tasks } from '../../models/tasks'

const rootUrl = 'api/v1/tasks'

export async function fetchTasks(): Promise<Tasks[]> {
  const res = await request.get(rootUrl)
  return res.body
}
