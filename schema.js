const axios = require("axios");

const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql')

const url = "https://ghibliapi.herokuapp.com/films/";

const FilmType = new GraphQLObjectType ({
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
        type: new GraphQLList(FilmType),
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => axios(url)
          .then(res => {            
            if (typeof args.id === "undefined") {
              return res.data;
            } else {
              return res.data[args.id];
            }
          })
          .catch(err => err)
      }
    })
  })
})