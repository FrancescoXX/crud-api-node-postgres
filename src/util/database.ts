const Sequelize = require('sequelize')

const sequelizeInstance = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,{
    host:process.env.PGHOST,
    dialect: 'postgres'
  },
)

export default sequelizeInstance