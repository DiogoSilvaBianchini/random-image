const express = require("express")
const morgan = require("morgan")
const UserController = require("../controller/userControllers")

const routes = express.Router()


routes.use(morgan("dev"))

routes.get("/user/allUser", UserController.getAllUsers)
routes.get("/user/user", UserController.getUserById)
routes.post("/user", UserController.registerNewUser)

module.exports = routes