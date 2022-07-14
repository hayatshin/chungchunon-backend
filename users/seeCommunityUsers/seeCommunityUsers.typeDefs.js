import { gql } from "apollo-server";

export default gql`
  type Query {
    seeCommunityUsers(id: Int!): [User]
  }
`;
