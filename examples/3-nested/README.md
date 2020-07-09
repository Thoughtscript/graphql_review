# 3-nested

Nested GraphQL objects are usually implemented to represent relationships (*one-to-one*, *one-to-many*, *many-to-one*, *many-to-many*).

## Defining Types

 **Types** and type relationships definitions should be captured using something like the following:

```graphql
type Query {
  images: [Image]
}

type Image {
  id: Int!,
  description: String
  file: File!
  owner: User!
}

type File {
  name: String!
  mimeType: String!
}

type User {
  id: Int!,
  firstName: String
  lastName: String
  username: String!
  userpic: String!
}
```

Above, is a file `schema.graphql`. Below, is a string used to define  **types** in JavaScript:

```JavaScript
const typeDefs = `
   type Query {
       sayHello(name: String!): String!
   }

   type Mutation {
       sayHello(name: String!): String!
   }
`;
```

These are used to build a GraphQL **schema**.

## Differences

The **schema** built above will associate **types** with **resolvers** to handle requests made to the Graph QL API:

1. Queries correspond to GET requests.
1. Mutations correspond to POST, PUT, DELETE, and UPDATE requests.

**Resolvers** handle or resolve the request per usual (as it is done in REST).

## Resources

1. https://github.com/amaurymartiny/graphql-example
1. https://www.toptal.com/graphql/creating-your-first-graphql-api
1. https://www.toptal.com/graphql/graphql-nodejs-api
1. https://www.toptal.com/api-development/graphql-vs-rest-tutorial
1. https://medium.com/ottofellercom/two-important-things-about-graphql-schema-design-c729f474e749