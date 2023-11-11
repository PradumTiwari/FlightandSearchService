const express=require('express');

const {PORT}=require('./config/serverConfig')
const {Name}=require('./config/serverConfig');
const setupAndStartServer=async()=>{

//create the express obj
   const app=express();
    app.listen(3000,()=>{
    console.log('Server started at ${PORT}',PORT);
   //  console.log(process.env);
   console.log(`${Name}`,Name);
   })

}

//install dotenv

setupAndStartServer();