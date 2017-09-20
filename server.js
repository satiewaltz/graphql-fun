const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');

const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
  schema, // contains types and query to grab data
  graphiql: true
}));

const PORT = 4000;
app.listen(PORT);
console.log(`Listening on https://localhost:${ PORT } ...`);