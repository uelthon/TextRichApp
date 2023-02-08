import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { GraphQLError } from 'graphql'

import User from '../../models/user.js'
import { JWT_SECRET } from '../../utils/config.js'

const mutations = {
  login: async (root, args) => {
    const { username, password } = args
    const user = await User.findOne({
      where: {
        username
      }
    })

    if (!user) {
      throw new GraphQLError('Incorrect username or password', {
        extensions: {
          code: 'BAD_USER_INPUT'
        }
      })
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash)

    if (!isPasswordValid) {
      throw new GraphQLError('Incorrect username or password', {
        extensions: {
          code: 'BAD_USER_INPUT'
        }
      })
    }

    const userForToken = {
      username: user.username,
      isAdmin: user.isAdmin,
      id: user.id
    }

    return {
      token: jwt.sign(userForToken, JWT_SECRET),
      user: {
        username: user.username,
        id: user.id,
        myTags: user.myTags,
        isAdmin: user.isAdmin
      }
    }
  }
}

export const resolvers = { mutations }
