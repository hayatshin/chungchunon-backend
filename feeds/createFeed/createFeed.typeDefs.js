import { gql } from "apollo-server-express";

export default gql`
  scalar Upload

  type Mutation {
    createFeed(photos: [Upload], caption: String!): Feed
  }
`;
