import { GraphQLError } from 'graphql'
import bcrypt from 'bcrypt'

import User from '../../models/user.js'
import Note from '../../models/note.js'
import { BCRYPT_ROUNDS } from '../../utils/config.js'
import { defaultNotes } from '../../utils/defaultNotes.js'

const queries = {
  allUsers: async (root, args, context) => {
    if (!context.currentUser || !context.currentUser.isAdmin) {
      throw new GraphQLError('Not Authorized')
    }
    const users = await User.findAll({
      attributes: { exclude: 'passwordHash' },
      include: {
        model: Note,
        attributes: { exclude: 'userID' }
      }
    })
    return users
  },
  userCount: async (root, args, context) => {
    if (!context.currentUser || !context.currentUser.isAdmin) {
      throw new GraphQLError('Not Authorized')
    }
    const count = await User.count()
    return count
  },
  me: async (root, args, context) => {
    if (!context.currentUser) {
      throw new GraphQLError('Not Authorized')
    }
    const user = await User.findByPk(context.currentUser.id)
    return user
  }
}

const mutations = {
  createUser: async (root, args) => {
    const { username, password } = args
    if (password.length < 6) {
      throw new GraphQLError('Password must have 6 characters at least', {
        extensions: {
          code: 'BAD_USER_INPUT',
          argumentName: 'password',
          args: args.password
        }
      })
    }
    if (username.length < 3) {
      throw new GraphQLError('Username must have 3 characters at least', {
        extensions: {
          code: 'BAD_USER_INPUT',
          argumentName: 'username',
          args: args.username
        }
      })
    }
    const passwordHash = await bcrypt.hash(password, Number(BCRYPT_ROUNDS))
    try {
      const user = await User.create({
        username,
        passwordHash
      })
      const exampleNotes = defaultNotes.map(n => ({
        ...n,
        userId: user.id
      }))
      await Note.bulkCreate(exampleNotes)
      return user
    } catch {
      throw new GraphQLError('Username not available')
    }
  },
  updateUser: async (root, args, context) => {
    const { userId, ...body } = args
    if (!context.currentUser) {
      throw new GraphQLError('Not Authorized')
    }
    const user = await User.findByPk(userId)
    if (!user) throw new GraphQLError('Incorrect or malformet id')
    if (context.currentUser.id !== user.id) {
      throw new GraphQLError('Not Authorized')
    }
    user.set({
      ...body
    })
    await user.save()
    return user
  }
}

export const resolvers = { queries, mutations }
