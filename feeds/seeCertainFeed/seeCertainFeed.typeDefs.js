import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCertainFeed(userName: String!): [Feed]
  }
`;
