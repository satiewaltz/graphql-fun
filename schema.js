const axios = require("axios");

const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql')

const url = "https://ghibliapi.herokuapp.com/";

const FilmType = new GraphQLObjectType ({
  name: 'Film',
  description: '...',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: json => json.title
    },
    description: {
      type: GraphQLString,
      resolve: json => json.description
    }    
  })
})

const SpeciesType = new GraphQLObjectType ({
  name: 'Species',
  description: '...',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: json => json.name
    },
    classification: {
      type: GraphQLString,
      resolve: json => json.classification
    }    
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'query',
    description: '...',
    fields: () => ({
      // Entire resource
      films: {
        type: new GraphQLList(FilmType),
        resolve: (root, args) => axios(url + `films`)
          .then(res => res.data)
          .catch(err => err)
      },
      // Singleton
      film: {
        type: FilmType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => axios(url + `films`)
          .then(res => res.data[args.id])
          .catch(err => err)
      },
      
      // Entire resource
      species: {
        type: new GraphQLList(SpeciesType),
        resolve: (root, args) => axios(url + `species`)
          .then(res => res.data)
          .catch(err => err)
      },
      // Singleton
      singleSpecies: {
        type: SpeciesType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => axios(url + `species`)
          .then(res => res.data[args.id])
          .catch(err => err)
      },      
    })
  })
})