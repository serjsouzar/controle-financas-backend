const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const amountSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  value:{
    type: Number,
    required: true
  },
  outcome:{
    type: Boolean,
    required: true
  }
}, {timestamps: true})

const Amount = mongoose.model("Amount", amountSchema)

module.exports = {Amount, amountSchema}