const express = require ('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnect = require('./Config/dbConfig');



const app = express();
const PORT = process.env.PORT || 3004;
dotenv.config();

//Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.listen(PORT,()=>{
    console.log(`🚀 SERVER STARTED ON PORT : ${PORT}`)
    dbConnect();
})

const userroutes = require ("./Router/userroutes")
app.use("/user",userroutes)