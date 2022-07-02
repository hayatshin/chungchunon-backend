import { gql } from "apollo-server-express";

export default gql`
  type Comment {
    id: Int!
    user: User!
    feed: Feed!
    payload: String!
    isMine: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;
