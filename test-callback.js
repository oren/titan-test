// var client = gremlin.createClient(8182, 'localhost');

var gremlin = require('gremlin-client');
var client = gremlin.createClient();

client.execute('g.V().values("name")', function(err, results) {
  if (!err) {
    console.log('results', results)
  }
});

