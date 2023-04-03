//schema for GraphQL API using gql
// Define User, Book, Auth and two operations, Query and Mutations
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]!
}
type Book {
    authors: [String]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
},
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: [String], description: String,
        bookId: ID,
        image: String,
        link: String,
        title: String): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs