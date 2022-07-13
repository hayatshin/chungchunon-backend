import { gql } from "apollo-server";

export default gql`
  type Poem {
    id: String!
    user: User!
    poemTitle: String!
    poemCaption: String!
    createdAt: String!
    updatedAt: String!
  }
`;
