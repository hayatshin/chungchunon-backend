import { gql } from "apollo-server";

export default gql`
  type Feed {
    id: String!
    user: User!
    photos: [String]
    caption: String!
    createdAt: String!
    updatedAt: String!
  }
`;
