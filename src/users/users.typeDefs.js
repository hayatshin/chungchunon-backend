import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    kakaoId: String!
    birthyear: String!
    birthday: String!
    gender: String!
    cellphone: String!
    name: String!
    avatar: String
    bio: String
    region: String
    createdAt: String!
    updatedAt: String!
    community: Community
    # total
    totalPointNumber: Int!
    totalLikeNumber: Int!
    totalCommentNumber: Int!
    totalFeedNumber: Int!
    totalPoemNumber: Int!
    totalStepNumber: Int!
    # thisweek
    thisweekPointNumber: Int!
    thisweekLikeNumber: Int!
    thisweekCommentNumber: Int!
    thisweekFeedNumber: Int!
    thisweekPoemNumber: Int!
    thisweekStepNumber: Int!
    # thisweek
    lastweekPointNumber: Int!
    lastweekLikeNumber: Int!
    lastweekCommentNumber: Int!
    lastweekFeedNumber: Int!
    lastweekPoemNumber: Int!
    lastweekStepNumber: Int!
    #
    age: String!
    master: Boolean
  }
`;
