const { Router } = require('express')
const Team = require('../team/model')
const Player = require('./model')

const router = new Router()

router.get('/player', (req, res, next) =>
  Player.findAll()
    .then(result => res.json(result))
    .catch(error => next(error))
)

router.post('/player', (req, res, next) =>
  Player.create(req.body)
    .then(team => res.json(team))
    .catch(error => next(error))
)

router.get('/player/:id', (req, res, next) => {
  //including (or embedding) the team inside the player
  //Sequelize has built-in features
  //add an options object as an argument
  //The object needs to have an include property with the value of an array containg the Team model
  Player.findByPk(req.params.id, { include: [Team] })
    .then(team => res.json(team))
    .catch(error => next(error))
})
module.exports = router
