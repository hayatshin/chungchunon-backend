import { gql } from "apollo-server";

export default gql`
  type AdminloginResult {
    ok: Boolean!
    token: String
    error: String
  }
  type Mutation {
    adminlogin(email: String!, password: String!): AdminloginResult!
  }
`;
