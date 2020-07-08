'use strict'

const {graphql, GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql')

// I think the idea is that these are usually fairly flat
// More sophisticated structures would be captured at the queryType stage
const fields = {
    hello: {
        type: GraphQLString,
        resolve: () => 'world'
    },
    goodbye: {
        type: GraphQLString,
        resolve: () => 'goodnight'
    }
}

// This is an example of a nested query type - note that queries operate on its fields
const queryType = new GraphQLObjectType({name: 'RootQueryType', fields: fields})
const schema = new GraphQLSchema({query: queryType})

const test = query => {
    graphql(schema, query).then(result => {
        console.log(result)
    })
}

test('{ hello }')
test('{ goodbye }')