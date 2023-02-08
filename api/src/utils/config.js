import * as dotenv from 'dotenv'
dotenv.config()

export const POSTGRES_URI = process.env.POSTGRES_URI
export const PORT = process.env.PORT
export const JWT_SECRET = process.env.JWT_SECRET
export const BCRYPT_ROUNDS = process.env.BCRYPT_ROUNDS
