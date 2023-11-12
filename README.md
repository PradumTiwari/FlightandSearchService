//There are two type of approach role based architecture and feature based approach

/
 -src/
 index.js //server
 models/
 controllers/
 middlewares/
 services/
 utils/
 config/
-test/[Later]

#welcome to Flight Service

## Project Setup
-clone the project on your local
-Execute the 'npm install' on the same path as of your root directory of the downloaded poroject
-Create a '.env' file in the root directory and add the following enviroment variable 
-PORT=3000
-Inside the src/config folder create a new file 'config.json' and then add the following piece of json

```
{
  "development": {
    "username": "<Your Db login Name>",
    "password": <Your Db Password>,
    "database": "Fight_And_Search",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
 
```

--Once you've added your db config as listed above,go to the src folder from your terminal and execute 'npx sequelize db:create'