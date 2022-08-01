import { gql } from "apollo-server";

export default gql`
  type Admin {
    id: String!
    email: String!
    password: String!
    admincommunity: String!
  }

  type Feedpoemlike {
    id: String!
    createdAt: String!
  }

  type Feedpoemcomment {
    id: String!
    createdAt: String!
  }
`;
