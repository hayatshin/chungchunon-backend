import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeAllPoems(offset: Int!): [Poem]
  }
`;
