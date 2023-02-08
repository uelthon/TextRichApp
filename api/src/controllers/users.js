import { Router } from 'express'

import User from '../models/user.js'
import Note from '../models/note.js'

const router = Router()

router.get('/', async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: 'passwordHash' },
    include: {
      model: Note,
      attributes: { exclude: 'userId' }
    }
  })
  res.json(users)
})

router.post('/', async (req, res) => {
  const { username, password: passwordHash } = req.body
  const body = {
    username,
    passwordHash
  }
  const user = await User.create(body)
  res.json(user)
})

export default router
