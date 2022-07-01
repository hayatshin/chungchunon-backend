import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    seeAllFeeds(offset: Int!): [Feed]
  }
`;
