const mongoose = require("mongoose")

module.exports = databaseConn = () => {
    try {
        mongoose.connect(process.env.URL_SERVER)
        return mongoose.connection
    } catch (err) {
        console.log(err.mongoose)
    }
}

