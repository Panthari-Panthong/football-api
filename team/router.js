const { Router } = require('express')

const Team = require('./model')

const router = new Router()

router.get('/team', (req, res, next) =>
  Team.findAll()
    //receive the list of teams. Send the list as the response.
    .then(result => res.json(result))
    //receive an error if it is thrown. Pass it to next.
    .catch(error => next(error))
)

router.post('/team', (req, res, next) =>
  Team.create(req.body)
    .then(team => res.json(team))
    .catch(error => next(error))
)

module.exports = router