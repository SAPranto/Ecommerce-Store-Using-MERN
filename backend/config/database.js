const mongoose = require ('mongoose')
mongoose.set('strictQuery', true);

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser:true
    }).then(con => {
        console.log(`MongoDB Database Connected With HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase