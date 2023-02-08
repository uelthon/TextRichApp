import { Router } from 'express'

import Note from '../models/note.js'

const router = Router()

router.get('/', async (req, res) => {
  const notes = await Note.findAndCountAll({
    where: {
      ...(req.query.pin && { pin: req.query.pin })
    }
  })

  res.json(notes)
})

router.post('/', async (req, res) => {
  const note = await Note.create(req.body)
  res.json(note)
})

router.put('/:id', async (req, res) => {
  const note = await Note.findByPk(req.params.id)
  if (!note) return res.status(400).json({ error: 'incorrect or missing id' })
  note.set({
    ...req.body
  })
  await note.save()
  res.json(note)
})

export default router
