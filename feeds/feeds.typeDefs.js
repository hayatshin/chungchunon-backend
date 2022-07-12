import { gql } from "apollo-server";

export default gql`
  type Feed {
    id: String!
    user: User!
    photos: [String]
    caption: String!
    createdAt: String!
    updatedAt: String!
    # feeds.resolvers - 직접 관계 맺기
    likeNumber: Int!
    comments: [Comment]
    commentNumber: Int!
    isMine: Boolean!
    isLiked: Boolean!
  }

  type Like {
    id: Int!
    feed: Feed!
    user: User!
    createdAt: String!
    updatedAt: String!
  }
`;
