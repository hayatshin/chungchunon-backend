import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    deletePoemComment(id: Int!): MutationResponse!
  }
`;
