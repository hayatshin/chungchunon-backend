import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCommunityCommentOrder(id: Int!): [User]
  }
`;
