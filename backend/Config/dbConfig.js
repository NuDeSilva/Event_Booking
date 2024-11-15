const mongoose = require('mongoose')
const dbConnect =()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }).then ((res)=>{
        console.log(`💻 DB SYNCED`)
    }).catch((error)=>{
        console.log(`You have eroor : ${error}`)
    });
}


module.exports = dbConnect;