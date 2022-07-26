import { gql } from "apollo-server";

export default gql`
  scalar Upload

  type Mutation {
    createAccount(
      birthYear: String!
      birthday: String!
      gender: String!
      cellphone: String!
      name: String!
      avatar: Upload
      bio: String
      region: String!
      community: String!
      age: String!
      kakaoId: String!
    ): MutationResponse!
  }
`;
