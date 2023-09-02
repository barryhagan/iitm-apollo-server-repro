import { ApolloServer } from "@apollo/server";

console.log("Attempting to create ApolloServer...");

const apollo = new ApolloServer({
  typeDefs: `
  type Ping {
    answer: String
  }
  type Query {
    ping: Ping
  } `,
});

console.log("ApolloServer created.");
