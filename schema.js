const axios = require("axios");

const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql')

const url = "https://ghibliapi.herokuapp.com/films/";

// const x = axios(url)
// .then(res => console.log(res))
// .catch(err =>  {
//   console.log("bad")
//   console.log(err)
// });

const FlimType = new GraphQLObjectType ({
  name: 'Flim',
  description: '...',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: json => json.title
    }
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',
    fields: () => ({
      flims: {
        type: FlimType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => axios(url)
          .then(res => res.data[args.id])
          .catch(err => err)
      }
    })
  })
})