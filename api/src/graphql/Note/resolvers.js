import { GraphQLError } from 'graphql'
import { Op } from 'sequelize'

import Note from '../../models/note.js'

const queries = {
  allNotes: async (root, args, context) => {
    const { pin } = args
    if (!context.currentUser || !context.currentUser.isAdmin) {
      throw new GraphQLError('Not Authorized')
    }
    const notes = await Note.findAll({
      where: {
        ...(pin !== undefined && { pin })
      }
    })
    return notes
  },
  noteCount: async (root, args, context) => {
    const { pin } = args
    if (!context.currentUser || !context.currentUser.isAdmin) {
      throw new GraphQLError('Not Authorized')
    }
    const count = await Note.count({
      where: {
        ...(pin !== undefined && { pin })
      }
    })
    return count
  },
  myNotes: async (root, args, context) => {
    const { pin, offset = 0, limit = 10, tag, search = '' } = args
    if (!context.currentUser) {
      throw new GraphQLError('Not Authorized')
    }
    const notes = await Note.findAndCountAll({
      where: {
        userId: context.currentUser.id,
        ...(search.length > 0 && {
          [Op.or]: [
            {
              title: {
                [Op.iRegexp]: search
              }
            },
            {
              content: {
                [Op.iRegexp]: search
              }
            }
          ]
        }),
        ...(pin !== undefined && { pin }),
        ...(tag !== undefined && { tags: { [Op.contains]: [tag] } })
      },
      offset,
      limit,
      order: [
        ['createdAt', 'DESC']
      ]
    })
    return notes
  }
}

const mutations = {
  createNote: async (root, args, context) => {
    if (!context.currentUser) {
      throw new GraphQLError('Not Authorized')
    }
    const note = await Note.create({
      ...args,
      userId: context.currentUser.id
    })
    return note
  },
  updateNote: async (root, args, context) => {
    const { noteId, ...body } = args
    if (!context.currentUser) {
      throw new GraphQLError('Not Authorized')
    }
    const note = await Note.findByPk(noteId)
    if (!note) throw new GraphQLError('Incorrect or malformet id')
    if (context.currentUser.id !== note.userId) {
      throw new GraphQLError('Not Authorized')
    }
    note.set({
      ...body
    })
    await note.save()

    return note
  },
  deleteNote: async (root, args, context) => {
    const { noteId } = args
    if (!context.currentUser) {
      throw new GraphQLError('Not Authorized')
    }
    const note = await Note.findByPk(noteId)
    if (!note) throw new GraphQLError('Incorrect or malformet id')
    if (context.currentUser.id !== note.userId) {
      throw new GraphQLError('Not Authorized')
    }
    await note.destroy()
    return note
  }
}

export const resolvers = { queries, mutations }
