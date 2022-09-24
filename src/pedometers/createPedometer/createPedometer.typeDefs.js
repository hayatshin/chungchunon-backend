import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createPedometer(stepCount: Int!): Pedometer
  }
`;
