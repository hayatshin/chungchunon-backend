import { gql } from "apollo-server-express";

export default gql`
  type Pedometer {
    id: Int!
    user: User!
    stepCount: Int!
    isMine: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;
