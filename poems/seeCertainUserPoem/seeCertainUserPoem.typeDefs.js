import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCertainUserPoem(id: Int!, offset: Int!): [Poem]
  }
`;
