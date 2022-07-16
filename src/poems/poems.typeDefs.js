import { gql } from "apollo-server";

export default gql`
  type Poem {
    id: String!
    user: User!
    poemTitle: String!
    poemCaption: String!
    createdAt: String!
    updatedAt: String!
    # feeds.resolvers - 직접 관계 맺기
    poemLikeNumber: Int!
    poemComments: [Poemcomment]
    poemCommentNumber: Int!
    isMine: Boolean!
    isLiked: Boolean!
  }

  type Poemlike {
    id: Int!
    poem: Poem!
    user: User!
    createdAt: String!
    updatedAt: String!
  }
`;
