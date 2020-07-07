'use strict'

const { graphql, buildSchema } = require('graphql')

// Essentially assembles an object graph
// Query on graph

// Schema
const schema = buildSchema(`
  type Query {
    hello: String
    goodbye: String
  }
`)

// Data
const root = { hello: () => 'Hello world!', goodbye: () => 'Goodbye!'}

// Query #1
const helloQuery = '{ hello }'
graphql(schema, helloQuery, root).then(response => {
    console.log(response)
})

// Query #1
const goodbyeQuery = '{ goodbye }'
graphql(schema, goodbyeQuery, root).then(response => {
    console.log(response)
})