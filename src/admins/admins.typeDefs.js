import { gql } from "apollo-server";

export default gql`
  type Admin {
    id: String!
    email: String!
    password: String!
    admincommunity: String!
  }
`;
