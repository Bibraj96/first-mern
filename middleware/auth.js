// We need to create middleware that allows us to send this token w/in the header when we want to access a protected route (ex: view user's contacts)
const jwt = require('jsonwebtoken')
const config = require('config')

// when we're dealing with middleware functions, you need to call next which essentially says "move on to the next piece of middleware"
module.exports = function(req, res, next) {
  // Get token from header, if there is one
  const token = req.header('x-auth-token') // Key to token in header 

  // If there isn't, send error message with 401 status
  if(!token) {
    return req.status(401).json({ msg: 'No token, authorization denied' })
  }

  // If there is a token, take it out, verify it, pull out payload 
  try{
    const decoded = jwt.verify(token, config.get('jwtSecret'))

    // Set user from payload to req.user so we'll have access to it in the route
    req.user = decoded.user
    next()
  } catch(err) {
    res.status(401).json({ msg: 'Token is not valid' })
  }
}