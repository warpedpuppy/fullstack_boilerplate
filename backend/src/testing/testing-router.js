const express = require('express')
const testingRouter = express.Router();

testingRouter
.get("/", (req, res) => {
    res
    .status(200)
    .json({success: true})
})

module.exports = testingRouter;