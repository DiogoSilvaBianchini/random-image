const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Nome deve ser preenchido"]
    },
    email: {
        type: String,
        required: [true, "Email deve ser preenchido"]
    },
    password: {
        type: String,
        required: [true, "Senha deve ser preenchida"]
    }
},{timestamps: true})

const userModel = model("users", userSchema)

module.exports = userModel