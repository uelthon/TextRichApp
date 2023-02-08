import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './config.js'

export const decodedToken = async ({ req }) => {
  const auth = req ? req.headers.authorization : null
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    const decodedToken = jwt.verify(
      auth.substring(7), JWT_SECRET
    )
    return { currentUser: decodedToken }
  }
}
