const app = require('./app')
const connectDatabase = require('./config/database.js')

const dotenv = require('dotenv')

// Setting up config file
dotenv.config({path: 'backend/config/config.env'})


// Connecting To Database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server Started On PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})