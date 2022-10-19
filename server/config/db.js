const mongoose = require('mongoose')

// Initialising MongoDB
const mongodb = async () => {
    mongoose.connect("mongodb+srv://appdevteam:12345@cluster0.tboiy6s.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: 'Task-management'
    }
)
.then(()=>
        {
            console.log(`MongoDB Connected : ${mongoose.connection.host}`)
        }      
    )
.catch((err)=>{console.log(err)})
}

module.exports = mongodb;


