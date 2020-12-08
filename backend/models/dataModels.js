import mongoose from 'mongoose'

// Model for data

const dataModel = mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  animal: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
})

const Data = mongoose.model('Data', dataModel)

export default Data
