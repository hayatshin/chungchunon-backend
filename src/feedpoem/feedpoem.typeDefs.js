import { gql } from "apollo-server";

export default gql`
  type Feedpoem {
    # 공통
    id: String!
    user: User!
    createdAt: String!
    updatedAt: String!
    isMine: Boolean!
    isLiked: Boolean!
    # 피드
    photos: [String]
    caption: String
    likeNumber: Int
    comments: [Comment]
    commentNumber: Int
    # 시
    poemTitle: String
    poemCaption: String
    poemLikeNumber: Int
    poemComments: [Poemcomment]
    poemCommentNumber: Int
  }
`;
