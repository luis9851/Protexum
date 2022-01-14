const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const Long = require('mongodb').Long;
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var collection = 'users';
const util = require('util');


var corsOptions = {
    origin: 'http://localhost:8100',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const url = 'mongodb://localhost:27017';
const dbName = "protexum";

const client = new MongoClient(url, { useUnifiedTopology: true });

/* Inicializar el servidor */
app.listen(port, function(){
    console.log('Server running...');
});