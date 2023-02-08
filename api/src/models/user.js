import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../utils/db.js'

export const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: false
  },
  passwordHash: {
    type: DataTypes.TEXT,
    field: 'password_hash',
    allowNull: false
  },
  myTags: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    field: 'my_tags',
    defaultValue: ['Inspiration', 'Personal', 'Work']
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    field: 'is_admin',
    defaultValue: false,
    allowNull: false
  }
}

class User extends Model {}

User.init({
  ...userSchema
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'user'
})

export default User
