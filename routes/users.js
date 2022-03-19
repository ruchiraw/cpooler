const _ = require('lodash')
const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

const users = []

let userId = 0

// define the home page route
router.post('/users', (req, res) => {
  const user = req.body

  // call the database and create the user
  user._id = userId++
  users.push(user)

  res.json(user)
})

// define the home page route
router.get('/users', (req, res) => {
  res.json(users)
})
// define the about route
router.get('/users/:id', (req, res) => {
  const user = _.find(users, function (user) {
    return user._id == req.params.id
  })

  if (user) {
    return res.json(user)
  }

  res.status(404).json({
    message: `The specified user ${req.params.id} cannot be found`
  })
})

module.exports = router
