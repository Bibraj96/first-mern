const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check')

const User = require('../models/User')
const Contact = require('../models/Contact')

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', (req, res) => { 
  res.send('Get all contacts')
})

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private
router.post('/', (req, res) => { 
  res.send('Add a contact')
})

// @route     PUT api/contacts/:id
// @desc      Add new contact
// @access    Private
router.put('/:id', (req, res) => { 
  res.send('Update a contact')
})

// @route     DELETE api/contacts/:id
// @desc      Delete a contact
// @access    Private
router.delete('/:id', (req, res) => { 
  res.send('Delete a contact')
})

// export router
module.exports = router