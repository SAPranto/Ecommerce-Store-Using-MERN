const app = require('./app')
const connectDatabase = require('./config/database.js')

const dotenv = require('dotenv')

// Handle Uncaught Exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`)
    console.log('Shutting down due to uncaught exception')
    process.exit(1)
})

// Setting up config file
dotenv.config({path: 'backend/config/config.env'})


// Connecting To Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Started On PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

// Handle Unhandled Error
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`)
    console.log('Shutting down the server due to unhandled promise rejection')
    server.close(() => {
        process.exit(1)
    })
})