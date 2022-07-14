import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seePoemComments(id: Int!): [Poemcomment]
  }
`;
