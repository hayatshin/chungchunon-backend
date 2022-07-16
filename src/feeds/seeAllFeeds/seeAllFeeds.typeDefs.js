import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeAllFeeds(offset: Int!): [Feed]
  }
`;
