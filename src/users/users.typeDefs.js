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
    createdAt: String!
    updatedAt: String!
    community: Community!
    # thisweek
    thisweekLikeNumber: Int!
    thisweekCommentNumber: Int!
    thisweekFeedNumber: Int!
    thisweekPoemNumber: Int!
    # thisweek
    lastweekLikeNumber: Int!
    lastweekCommentNumber: Int!
    lastweekFeedNumber: Int!
    lastweekPoemNumber: Int!
    #
    age: Int!
  }
`;
