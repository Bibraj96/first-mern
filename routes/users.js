const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator/check')

const User = require('../models/User')

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.post('/', [
  check('name','Please add a name')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => { // '/' pertains to api/users
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, password } = req.body

  try {
    let user = await User.findOne({ email: email}) // mongoose method to find a user based on a field 
    if (user) {
      return res.status(400).json({ msg: 'User already exists' })
    }

    user = new User({
      name, // Using ES6 syntax; these are all email:email, etc
      email,
      password
    })

    const salt = await bcrypt.genSalt(10)
    
    user.password = await bcrypt.hash(password, salt)

    await user.save()

    const payload = { // With just the id, we can access all of the contacts the user has
      user: {
        id: user.id
      }
    }

  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// export router
module.exports = router