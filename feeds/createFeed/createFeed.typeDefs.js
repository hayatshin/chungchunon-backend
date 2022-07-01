import { gql } from "apollo-server-express";

export default gql`
  scalar Upload

  type createFeedResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createFeed(photos: [Upload], caption: String!): createFeedResult!
  }
`;
