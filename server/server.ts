import express from 'express'
import * as Path from 'node:path'
// import * as db from './db/db'
import tasks from './routes/tasks'

const server = express()

server.use(express.json())

// const tasks = await db.getTasks()
// const tasks = await db.getTasksById(3)
// const tasks = await db.deleteTasks(3)
// const tasks = db.getTasks()
// console.log(tasks)
// console.log(await db.getTasks)

//Add API routes here

server.use('/api/v1/tasks', tasks)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
