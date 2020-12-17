// We need to create middleware that allows us to send this token w/in the header when we want to access a protected route (ex: view user's contacts)
const jwt = require('jsonwebtoken')
const config = require('config')

// when we're dealing with middleware functions, you need to call next which essentially says "move on to the next piece of middleware"
module.exports = function(req, res, next) {}