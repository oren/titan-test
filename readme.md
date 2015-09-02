# Titan 0.9 in Docker

## Run Titan

```
git clone https://github.com/oren/titan.git
cd titan
docker-compose up
```

## Run Gremlin client

```
npm install
node get-all.js
Error: socket hang up
```

note: on linux you'll have to lowercase 'isarray' in node_modules/gremlin-client/src/executehandler.js ([fix](https://github.com/jbmusso/gremlin-client/pull/13) is about to get merged).

## Gremlin console

    bin/gremlin

## Resources

* [Titan 0.9 docs](http://s3.thinkaurelius.com/docs/titan/0.9.0-M2)
* [TinkerPop 3.x docs](http://tinkerpop.incubator.apache.org/docs/3.0.0-incubating)
* [Titan google group](https://groups.google.com/forum/#!forum/aureliusgraphs)
* [Gremlin google group](https://groups.google.com/forum/#!forum/gremlin-users)
