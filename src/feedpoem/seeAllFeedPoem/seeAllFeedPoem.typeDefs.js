import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeAllFeedPoem(offset: Int!): [Feedpoem]
  }
`;
