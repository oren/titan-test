var grex = require('grex');
var options = {
  host: 'localhost',
  port: 8182,
  graph: 'graph'
}
var client = grex.createClient(options);
var g = grex.g;

var query = g.V().remove();
client.fetch(query, function(err, results) {
  if(err) {
    console.error(err);
  }

  console.log('results:', results);
});
