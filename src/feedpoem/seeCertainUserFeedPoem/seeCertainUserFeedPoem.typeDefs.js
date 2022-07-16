import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCertainUserFeedPoem(offset: Int!, id: Int!): [Feedpoem]
  }
`;
