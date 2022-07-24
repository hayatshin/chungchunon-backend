import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeMeFeedPoem(offset: Int!): [Feedpoem]
  }
`;
