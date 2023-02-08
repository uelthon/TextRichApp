import { POSTGRES_URI } from './config.js'
import { Sequelize } from 'sequelize'
import { Umzug, SequelizeStorage } from 'umzug'

export const sequelize = new Sequelize(POSTGRES_URI)

const migrationConfig = {
  migrations: {
    glob: 'src/migrations/*.js',
    resolve: ({ name, path, context }) => {
      const migration = () => import(`file:///${path.replace(/\\/g, '/')}`)
      return {
        path,
        context,
        name,
        up: async (upParams) => (await migration()).up(upParams),
        down: async (downParams) => (await migration()).down(downParams)
      }
    }
  },
  context: sequelize.getQueryInterface(),
  logger: console
}

const runMigrations = async () => {
  const umzug = new Umzug({
    ...migrationConfig,
    storage: new SequelizeStorage({ sequelize, tableName: 'migrations' })
  })
  await umzug.up()
}

export const rollbackMigration = async () => {
  await sequelize.authenticate()
  const umzug = new Umzug({
    ...migrationConfig,
    storage: new SequelizeStorage({ sequelize, tableName: 'migrations' })
  })
  await umzug.down()
}

export const connectToDataBase = async () => {
  try {
    await sequelize.authenticate()
    await runMigrations()
    console.log('connected to the database')
  } catch (err) {
    console.log('failed to connect to the database', err)
    return process.exit(1)
  }

  return null
}
