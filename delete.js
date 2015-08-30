var grex = require('grex');
var options = {
  host: 'localhost',
  port: 8182,
  graph: 'graph'
}
var client = grex.createClient(options);
var g = grex.g;

var query = g.V('name', 'Los Angeles');
client.fetch(query, function(err, results) {
  if(err) {
    console.error(err);
  }

  var id = results[0]._id;
  console.log('id', id);

  query =  g.removeVertex(g.v(id));
  // g.commit();

  client.fetch(query, function(err, results) {
    if(err) {
      console.error(err);
    }

    console.log('results:', results);
  });

});
