const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:football@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db
  // sync the data in your database
  //{ force: true } tables are dropped on every restart
  //deleting all of your data
  //.sync({ force: true })
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error)


module.exports = db