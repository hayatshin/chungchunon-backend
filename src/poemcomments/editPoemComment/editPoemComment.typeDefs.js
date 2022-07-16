import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    editPoemComment(id: Int!, payload: String!): MutationResponse!
  }
`;
