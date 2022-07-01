import { gql } from "apollo-server";

export default gql`
  type Feed {
    id: String!
    user: User!
    photos: Photo!
    caption: String!
    createdAt: String!
    updatedAt: String!
  }

  type Photo {
    id: String!
    feed: Feed!
    user: User!
    photoURL: [String]!
  }
`;
