import { gql } from "apollo-server";

export default gql`
  scalar Upload

  type Mutation {
    createCommunity(
      communityName: String!
      communityLogo: Upload!
    ): MutationResponse!
  }
`;
