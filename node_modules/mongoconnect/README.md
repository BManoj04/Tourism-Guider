mongoConnect
============
A wrapper for MongoDB's MongoClient that handles keeping the connection open and dealing with reconnections.

In Node.js applications MongoDB connections are meant to be opened once and kept opened while the Node.js app is running (http://stackoverflow.com/a/15688610/446681). This module encapsulates the logic required to do this.  


Installation
============
    cd yourApp
    npm install mongoconnect


Typical usage
================
In your main server.js define the connection URL:

    var mongoConnect = require('mongoconnect');
    mongoConnect.setup('mongodb://localhost:27017/yourDB');


In your database access code (say blogModel.js) call mongoConnect.execute() to execute any MongoDB command like you would against the db object returned by MongoDB's default MongoClient.connect.

    var mongoConnect = require('./mongoconnect');
    mongoConnect.execute(function(err, db) {
      
      if(err) {
        // handle the error.
        return;
      }

      // Your code to do something with the db goes here
      db.collection('blog').find(...);
    
    });


Syntax
================

**mongoConnect.setup(mongoURL, mongoOptions, verbose)**

  Setups the parameters to connect to MongoDB. This method does not open the connection. The connection will be opened when issuing execute().

  * **mongoURL** is a string with the URL to connect to MongoDB, for example "mongodb://localhost:27017/yourDB" 
  
  * **mongoOptions** (optional) is an object that will be passed as-is to MongoDB when connecting. The default value is: { db: {}, server: {auto_reconnect: true, socketOptions: {keepAlive: 1} }, replSet: {}, mongos: {} }

  * **verbose** (optional) a boolean to turn verbose mode on. Verbose is issued via typical console.log() statement. The default value is off.

**mongoConnect.execute(callback)** 

  Executes a MongoDB command. This method makes sure the database connection has been opened before issuing the command. This method keeps the connection open. 

  * **callback** is a function that you provide. This function will be called with two parameters *err* and *db*. If the connection to the database succeeded *err* will be null, otherwise it will contain the error object returned while trying to connect. *db* is an instance of mongoClient that you can use to issue whatever command you want against MongoDB. *db* will be null if *err* is not null.

  Information about MongoClient and the commands that you can execute can be found here: http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html


Limitations
===========
Be aware that currently only one database can be handled through this code. As such, only the first call to setup is honored, subsequent calls are ignored. There is no harm in calling setup multiple times, though. Just keep in mind that they will be ignored. 



