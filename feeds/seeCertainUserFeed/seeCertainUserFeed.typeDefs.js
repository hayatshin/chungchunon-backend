import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCertainUserFeed(userName: String!, offset: Int!): [Feed]
  }
`;
