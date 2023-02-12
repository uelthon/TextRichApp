import express from 'express'
import compression from 'compression'
import cors from 'cors'

import User from './models/user.js'
import Note from './models/note.js'

import userRouter from './controllers/users.js'
import noteRouter from './controllers/notes.js'

User.hasMany(Note)
Note.belongsTo(User)

const app = express()

app.use(compression())
app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.use('/api/users', userRouter)
app.use('/api/notes', noteRouter)

export default app
