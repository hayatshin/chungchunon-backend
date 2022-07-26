import { gql } from "apollo-server";

export default gql`
  scalar Upload

  type Mutation {
    createAccount(
      birthyear: String!
      birthday: String!
      gender: String!
      cellphone: String!
      name: String!
      avatar: Upload
      age: String!
      kakaoId: String!
      bio: String!
      region: String!
      community: String!
    ): MutationResponse!
  }
`;
