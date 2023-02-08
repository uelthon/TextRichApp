import http from 'http'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'
import path from 'path'

import app from './app.js'
import { connectToDataBase } from './utils/db.js'
import { PORT } from './utils/config.js'
import { schema } from './graphql/index.js'
import { decodedToken } from './utils/middles.js'

const httpServer = http.createServer(app)
const __dirname = path.resolve()

const server = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer })
  ]
})

await connectToDataBase()
await server.start()

app.use('/api/graphql', expressMiddleware(server, {
  context: decodedToken
}))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

const start = async () => {
  httpServer.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}/api/graphql 🚀`)
  })
}

start()
