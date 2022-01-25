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
const dbName = "Control";

const client = new MongoClient(url, { useUnifiedTopology: true });

/* Inicializar el servidor */
app.listen(port, function(){
    console.log('Server running...');
});

app.get('/api/users',function( req,res ){
    console.log("User_List");
    client.connect(function(err) {
        if (err) throw err;
        var dbo = client.db(dbName);
        dbo.collection("users").find({}).toArray(function(err,result){
            if (err) throw err;
            res.json(result);
            console.log(result);
        });
    });
});

app.get('/api/user/:id',function(req,res){
    console.log("user");
    console.log("Access, " + parseInt(req.params.id));
    client.connect( function(err){
        if(err) throw err;
        var dbo = client.db(dbName);
        var query = { _id: parseInt(req.params.id)};
        dbo.collection("users").findOne(query, function(err, result) {
            if (err) handleError(res, err.message,'Failed to get document');
            res.json(result);
        });
    });
});