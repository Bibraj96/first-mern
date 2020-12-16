const express = require('express')
const router = express.Router()

// @route     Get api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', (req, res) => { 
  res.send('Get all contacts')
})

// export router
module.exports = router