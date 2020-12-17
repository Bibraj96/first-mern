const express = require('express')
const router = express.Router()

const User = require('../models/User')

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.post('/', (req, res) => { // '/' pertains to api/users
  res.send(req.body) // gives us data sent to the route (in this case: email, pass, and name)
})

// export router
module.exports = router