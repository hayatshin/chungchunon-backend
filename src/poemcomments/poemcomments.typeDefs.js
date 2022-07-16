import { gql } from "apollo-server-express";

export default gql`
  type Poemcomment {
    id: Int!
    user: User!
    feed: Feed!
    payload: String!
    isMine: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;
