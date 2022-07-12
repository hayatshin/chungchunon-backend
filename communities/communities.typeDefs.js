import { gql } from "apollo-server";

export default gql`
  type Community {
    id: Int!
    communityName: String!
    communityLogo: String!
  }
`;
