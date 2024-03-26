import Router from 'express'
import * as db from '../db/db'

const router = Router()

//GET /api/v1/tasks

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getTasks()
    res.json(tasks)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

//GET /api/v1/tasks/:id

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const tasks = await db.getTasksById(id)
    res.json(tasks)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

//Post /api/v1/tasks (allow add tasks)
router.post('/', async (req, res) => {
  try {
    const newTasks = req.body
    await db.addTasks(newTasks)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})
export default router
