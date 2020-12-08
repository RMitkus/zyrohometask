import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import dataRoutes from './routes/dataRoutes.js'
import path from 'path'
const app = express()

app.use(express.json())

dotenv.config()

connectDB()

app.use('/api/data', dataRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('App running at port 5000'))
