import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../utils/db.js'

export const noteSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  pin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  color: {
    type: DataTypes.ENUM('', '#f28b82', '#fbbc04', '#fff475', '#ffff99', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed'),
    allowNull: false,
    defaultValue: ''
  },
  background: {
    type: DataTypes.ENUM('', 'supermarket', 'food', 'musica', 'recipes', 'notes', 'places', 'travels', 'video', 'celebration'),
    allowNull: false,
    defaultValue: ''
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    defaultValue: []
  }
}

class Note extends Model {}

Note.init({
  ...noteSchema
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'note'
})

export default Note
