const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const ReviewRouter = require('./routes/ReviewRouter')
const FightsRouter = require('./routes/FightRouter')
const FighterRouter = require('./routes/FighterRouter')
const MatchupRouter = require('./routes/MatchupRouter')
const CardRouter = require('./routes/CardRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/reviews', ReviewRouter)
app.use('/fights', FightsRouter)
app.use('/fighters', FighterRouter)
app.use('/matchups', MatchupRouter)
app.use('/cards', CardRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))