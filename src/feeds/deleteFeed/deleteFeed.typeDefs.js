import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    deleteFeed(id: Int!): MutationResponse!
  }
`;
