const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check')

const User = require('../models/User')
const Contact = require('../models/Contact')

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', auth, async (req, res) => { 
  try {
    // Contacts have a user field, which is an object id, so we get the user from auth middleware to get a user and grab all of that user's contacts
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 }) // Most recent contacts first
    res.json(contacts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private
router.post('/', [auth, [
  check('name', 'Name is required').not().isEmpty()
]], (req, res) => { 
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, phone, type } = req.body

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id // grabbing user from auth middleware to assign a contact to the user that's logged in
    })

    const contact = await new Contact.save()
    res.json(contact)
  } catch (error) {
    
  }
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