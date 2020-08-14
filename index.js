const express = require('express')
const songsController = require('./controllers/songs')

const cors = require('cors')
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/songs', songsController)



app.listen(4000, () => console.log('My port 4000'))