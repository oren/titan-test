var grex = require('grex');
var options = {
  host: 'localhost',
  port: 8182,
  graph: 'graph'
}
var client = grex.createClient(options);
// shortcuts
var gremlin = grex.gremlin;
var g = grex.g;

var query = gremlin();

// var airports = [
//   {code: 'ATL', city: 'Atlanta'},
//   {code: 'ORD', city: 'Chicago'},
//   {code: 'LAX', city: 'Los Angeles'},
//   {code: 'DFW', city: 'Dallas-Fort Worth'},
//   {code: 'DEN', city: 'Denver'},
//   {code: 'JFK', city: 'New York'},
//   {code: 'SFO', city: 'San Francisco'},
//   {code: 'LGA', city: 'New York'}
// ];

// airports.forEach(function (airport) {
//   var airport = query.var(g.addVertex({ code: airport.code }));
//   var city = query.var(g.addVertex({ name: airport.city }));
//   query(g.addEdge(airport, city, 'in'));

//   client.execute(query, function(err, response) {
//     if (err) {
//       return console.error(err);
//     }

//     console.log('response:', response);
//   })
// });

  var airport = query.var(g.addVertex({ code: 'foo' }));
  var city = query.var(g.addVertex({ name: 'bar' }));
  query(g.addEdge(airport, city, 'in'));

  client.execute(query, function(err, response) {
    if (err) {
      return console.error(err);
    }

    console.log('response:', response);
  })
