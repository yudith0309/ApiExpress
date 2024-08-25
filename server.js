const express = require('express');  //Utilizar server Express
const bodyParser = require('body-parser');
var cors = require('cors');


const app = express();

var corsOptions = {
    origin: 'http://localhost:8000'
  };

app.use(cors(corsOptions));


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


//Conectarse a la BD 

const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});


app.use('/user', require('./routes/UserRouter'))

//Escuchar el server 

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});



