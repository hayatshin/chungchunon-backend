import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seePoemLikes(id: Int!): [User]
  }
`;
