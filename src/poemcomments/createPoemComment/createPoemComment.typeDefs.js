import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createPoemComment(poemId: Int!, payload: String!): Poemcomment
  }
`;
