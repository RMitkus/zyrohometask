import express from 'express'
const router = express.Router()
import { getAllData, getData } from '../controllers/dataController.js'

// Routes fro /api/data

router.route('/').get(getData)
router.route('/all/:page').get(getAllData)

export default router
