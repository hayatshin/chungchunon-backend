import { gql } from "apollo-server";

export default gql`
  scalar Upload

  type createAccountResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createAccount(
      birthday: String!
      gender: String!
      cellphone: String!
      name: String!
      avatar: Upload!
      bio: String
      region: String!
      community: String!
    ): createAccountResult!
  }
`;
