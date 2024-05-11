require("dotenv/config.js")
const express = require("express")
const dbConfig = require("./src/db/dbConfig")
const routes = require("./src/routes/userRoutes")
const error = require("./src/routes/errorRoutes")
const cors = require("cors")

const app = express()
const db = dbConfig()
const PORT = process.env.PORT || 8082

db.on("error", (err) => console.error(err))
db.once("open", () => console.log("banco de dados conectado"))

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(error)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))