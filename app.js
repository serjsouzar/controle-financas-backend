const express = require("express");
const app = express()
const cors = require("cors")
const conn = require("./db/conn")
const routes =  require("./routes/router")

app.use(express.json())
app.use(cors())
conn()

app.use('/api', routes)

app.listen(5000, () => {
  console.log("Server on 👍")
})