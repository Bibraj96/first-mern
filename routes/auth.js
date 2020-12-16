const express = require('express')
const router = express.Router()

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', (req, res) => { // '/' pertains to api/users
  res.send('Get logged in user')
})

// export router
module.exports = router