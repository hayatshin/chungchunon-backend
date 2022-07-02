import { gql } from "apollo-server-express";

export default gql`
  scalar Upload

  type Mutation {
    editFeed(id: Int!, photos: [Upload], caption: String): MutationResponse!
  }
`;
