import * as Sequelize from 'sequelize'
import db from '../util/database'

const User = db.define('users',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey: true,
  },
  username:{
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
})

export default User