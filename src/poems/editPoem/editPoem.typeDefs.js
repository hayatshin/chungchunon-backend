import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    editPoem(
      id: Int!
      poemTitle: String
      poemCaption: String
    ): MutationResponse!
  }
`;
