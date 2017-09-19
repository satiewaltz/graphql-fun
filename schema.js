const axios = require("axios");

const { 
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql')

const url = "https://ghibliapi.herokuapp.com";

const x = axios(url)
.then(res => console.log(res))
.catch(err =>  {
  console.log("bad")
  console.log(err)
});

const FlimType = new GraphQLObjectType ({
  title: 'Flim',
  description: '...',
  fields: () => ({

  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',
    field: () => ({
      flims: {
        type: FlimType,
        args: {
          id: { type: GraphQLString }
        }
      }
    })
  })
})