const mongoose = require('mongoose')
const config = require('congif')
const db = config.get('mongoURI')

const connectDB = () => {
  mongoose.connect(db, {
    userNewUrlParser: true,
    useCreateIndex: true,
    userFindAndModify: false
    // above 3 lines prevent warnings in console
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error(err.message)
    process.exit(1)
  })
}