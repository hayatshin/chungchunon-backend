import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    birthday: String!
    gender: String!
    cellphone: String!
    name: String!
    avatar: String!
    bio: String
    region: String!
    community: String!
    createdAt: String!
    updatedAt: String!
    # direct
    directLikeNumber: Int!
    directCommentNumber: Int!
    directFeedNumber: Int!
  }
`;
