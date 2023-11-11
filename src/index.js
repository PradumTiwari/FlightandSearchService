const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig')
const {Name}=require('./config/serverConfig');


const setupAndStartServer=async()=>{
//create the express obj
   const app=express();

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));

    app.listen(3000,()=>{
    console.log(`Server started at ${PORT}`);
   
   })

}

//install dotenv

setupAndStartServer();