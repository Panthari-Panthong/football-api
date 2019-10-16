const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:football@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db
  // sync the data in your database
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error)


module.exports = db