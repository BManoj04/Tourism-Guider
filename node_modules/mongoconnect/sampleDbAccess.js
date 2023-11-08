// var mongoConnect = require('./index.js');
var mongoConnect = require('mongoconnect');

exports.getData = function(callback) {

  // Execute a find command against the test1
  // collection in the database. Feel free to change
  // it to use a different collection or a totally
  // different command. 
  mongoConnect.execute(function(err, db) {

    if(err) {
      callback(err);
      return;
    }
    var collection = db.collection('test1');
    collection.find().limit(5).toArray(function(err, docs) {
      if(err) {
        callback(err);
      }
      else {
        callback(null, docs);
      }
    });

  });

};

exports.insertData = function(callback) {

  // Execute an insert command against the test1 
  // collection in the database. Feel free to change
  // it to use a different collection or a totally
  // different command. 
  mongoConnect.execute(function(err, db) {
    if(err) {
      callback(err);
      return;
    }
    var now = Date() + ""
    var testData = [{a : now}];
    var collection = db.collection('test1');
    collection.insert(testData, function(err, docs) {
      console.log("insert completed");
      console.log("err?", err)
      console.log("docs?", docs)
      callback(err);
    });
  });

};


