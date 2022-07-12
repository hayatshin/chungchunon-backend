import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCommunityLikeOrder(id: Int!): [User]
  }
`;
