var mongoose = require('mongoose');

/*
options:
db      - passed to the connection db instance
server  - passed to the connection server instance(s)
replset - passed to the connection ReplSet instance
user    - username for authentication (if not specified in uri)
pass    - password for authentication (if not specified in uri)
auth    - options for authentication
mongos  - Boolean - if true, enables High Availability support for mongos
sample:
var options = {
      db: { native_parser: true },
      server: { poolSize: 5 },
      replset: { rs_name: 'myReplicaSetName' },
      user: 'myUserName',
      pass: 'myPassword'
};
*/

var options = {
      server: { poolSize: 5 }
};

mongoose.connect('mongodb://localhost:27017/exapp', options);


module.exports = mongoose;

