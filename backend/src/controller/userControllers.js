const userModel = require("../model/userSchema")

class UserController{
    static async registerNewUser(req,res,next){
        const {name, email, password} = req.body
        try {
            await userModel.create({name, email, password})
            return res.status(201).json({results: undefined, message: "Usuario criado com sucesso!", error: undefined})
        } catch (error) {
            return next(error)
        }
    }

    static async getAllUsers(req,res,next){
        try {
            const findUsers = await userModel.find({}, ["-password"])
            return res.status(200).json({results: findUsers, message: "Usuario criado com sucesso", error: undefined})
        } catch (error) {
            next(error)
        }
    }

    static async getUserById(userId, req,res,next){
        try {
            const findUser = await userModel.findById({_id: userId}, ["-password"])
            return res.status(200).json({results: findUser, message: "Usuario criado com sucesso", error: undefined})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController