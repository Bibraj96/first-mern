const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      userNewUrlParser: true,
      useCreateIndex: true,
      userFindAndModify: false
      // above 3 lines prevent warnings in console
    })
    
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}
// Same as above without async/await
// const connectDB = () => {
  // mongoose.connect(db, {
  //   userNewUrlParser: true,
  //   useCreateIndex: true,
  //   userFindAndModify: false
  //   // above 3 lines prevent warnings in console
  // })
  // .then(() => console.log('MongoDB Connected'))
  // .catch(err => {
  //   console.error(err.message)
  //   process.exit(1)
// })

module.exports = connectDB