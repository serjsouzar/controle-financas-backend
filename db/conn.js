const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

async function Connection(){
  try{
    mongoose.set("strictQuery", true)
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.9b7lqji.mongodb.net/?retryWrites=true&w=majority`
    )
    console.log("Database connected 🔌")
  } catch (error) {
    console.log("Error", error)
  }
}

module.exports = Connection

