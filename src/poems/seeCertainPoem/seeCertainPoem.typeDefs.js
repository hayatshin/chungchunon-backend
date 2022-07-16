import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCertainPoem(id: Int!): Poem
  }
`;
