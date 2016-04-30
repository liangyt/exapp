// 官网推荐例子

var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/exapp';

var insertDocuments = function(db, callback) {

    var collection = db.collection('prolist');

    collection.insertMany([{
        a: 1
    }, {
        a: 2
    }, {
        a: 3
    }], function(err, result) {
        callback(result);
    });
}

var testMongodb = function() {
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        insertDocuments(db, function() {
            db.close();
        });
    });
}

module.exports = {
    testMongodb: testMongodb
};
