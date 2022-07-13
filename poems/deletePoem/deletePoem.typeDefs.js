import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    deletePoem(id: Int!): MutationResponse!
  }
`;
