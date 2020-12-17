const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator/check')

const User = require('../models/User')

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', (req, res) => { 
  res.send('Get logged in user')
})

// @route     POST api/auth
// @desc      Auth user and get token
// @access    Public
router.post('/', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], async (req, res) => { 
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  // take email and password out of body only b/c we're logging in (don't need name)
  const { email, password } = req.body

  // Error handling for invalid email or invalid password
  try {
    let user = await User.findOne({ email })

    if(!user) {
      return res.status(400).json({ masg: 'Invalid Credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' })
    }

    const payload = { // With just the id, we can access all of the contacts the user has
      user: {
        id: user.id
      }
    }

    // Respond with JSON Web Token
    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 360000
    }, (err, token) => {
      if(err) throw err
      res.json({ token })
    })

  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// export router
module.exports = router