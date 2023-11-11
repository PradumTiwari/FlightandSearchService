const dotenv=require('dotenv');

dotenv.config();

module.exports={
    PORT: process.env.PORT,
    Name:process.env.Name,
}