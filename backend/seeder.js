// Seed/Delete all data to/from db

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import data from './data/data.js'
import Data from './models/dataModels.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Data.insertMany(data)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

// const destroyData = async () => {
//   try {
//     await Data.deleteMany()
//     console.log('Data Destroyed!')
//     process.exit()
//   } catch (error) {
//     console.error(error)
//     process.exit(1)
//   }
// }
