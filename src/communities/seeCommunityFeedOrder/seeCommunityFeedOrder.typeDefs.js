import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCommunityFeedOrder(id: Int!): [User]
  }
`;
