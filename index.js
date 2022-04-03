
require('dotenv').config()

const express = require('express')
const cors = require('cors')

const server = express()
const port = process.env.PORT || 8000

server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>This is a test application</h1>')
})

server.listen(port, () => {
    console.log(`\n=== Server listening on port ${port} ===\n`)
})