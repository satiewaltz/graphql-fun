const axios = require("axios");

const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

// const url = "https://ghibliapi.herokuapp.com";

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
      type: GraphQLString
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
          id: { type: GraphQLString }
        },
        resolve: (root, args) => axios("https://ghibliapi.herokuapp.com", {
          parems: {
            
          }
        })
        .then(res => console.log(res))
        .catch(err =>  {
          console.log("bad")
          console.log(err)
        })
      }
    })
  })
})