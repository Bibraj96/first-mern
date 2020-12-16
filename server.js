// entry point to our backend
// can't use import syntax without babel or typescript
// which is why we're using common js below
// The code below allows us to create routes
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

// This boots up our server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))
app.get('/', (req, res) => res.json({ msg: 'Welcome to my MERN API' }))