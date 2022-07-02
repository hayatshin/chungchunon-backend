import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createComment(feedId: Int!, payload: String!): MutationResponse!
  }
`;
