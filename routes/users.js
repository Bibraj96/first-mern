const express = require('express')
const router = express.Router()
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

  } catch(err) {

  }
})

// export router
module.exports = router