import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editProfile(
      birthday: String
      gender: String
      cellphone: String
      name: String
      avatar: Upload
      bio: String
      region: String
      community: String
    ): MutationResponse!
  }
`;
