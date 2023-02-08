import { DataTypes } from 'sequelize'
import { noteSchema } from '../models/note.js'
import { userSchema } from '../models/user.js'

export const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable('users', {
    ...userSchema,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    }
  })
  await queryInterface.createTable('notes', {
    ...noteSchema,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    }
  })
  await queryInterface.addColumn('notes', 'user_id', {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id' }
  })
}

export const down = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('notes', 'user_id')
  await queryInterface.dropTable('users')
  await queryInterface.dropTable('notes')
}
