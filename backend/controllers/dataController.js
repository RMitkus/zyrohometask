import asyncHandler from 'express-async-handler'
import Data from '../models/dataModels.js'

// Methods of /api/data routes

// @desc    Fetch all data on scroll
// @route   GET /api/data/:page
// @access  Public
const getAllData = asyncHandler(async (req, res) => {
  const pageSize = 40

  const page = Number(req.params.page) || 1

  const infoData = await Data.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ infoData })
})

// @desc    Fetch paginated data
// @route   GET /api/data
// @access  Public
const getData = asyncHandler(async (req, res) => {
  const pageSize = 20
  const page = Number(req.query.pageNumber) || 1

  const count = await Data.countDocuments({})
  const infoData = await Data.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({
    infoData,
    page,
    pages: Math.ceil(count / pageSize),
  })
})

export { getData, getAllData }
