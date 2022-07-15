const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const routes = require('./routes')
const corsOptions = require('./config/cors')

const PORT = 4001

app.listen(PORT, () => {
  console.log('Server on port', PORT)
})

// Middleware
app.use(express.json())
app.use(cors(corsOptions))
morgan('tiny')

// Routes
routes(app)

module.exports = app
