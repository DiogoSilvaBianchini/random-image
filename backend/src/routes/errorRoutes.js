const express = require("express")
const router = express.Router()

router.use((error, req, res, next) => {
    return res.status(500).json({
        results: null, 
        message: "Erro interno do servidor", 
        error: error.message})
})

module.exports = router