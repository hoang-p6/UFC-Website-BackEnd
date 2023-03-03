const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const ReviewRouter = require('./routes/ReviewRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/reviews', ReviewRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))