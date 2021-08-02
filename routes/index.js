const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello, World! - I have no clue what Im doing')
})

module.exports = router
