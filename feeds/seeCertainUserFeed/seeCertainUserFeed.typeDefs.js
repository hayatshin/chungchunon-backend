import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCertainUserFeed(id: Int!, offset: Int!): [Feed]
  }
`;
