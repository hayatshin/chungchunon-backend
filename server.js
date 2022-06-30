require("dotenv").config();
import express from "express";
import logger from "morgan";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";

const PORT = process.env.PORT;

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: async ({ req }) => {
    //   return {
    //     loggedInUser: await getUser(req.headers.token),
    //   };
    // },
  });

  await server.start();
  const app = express();
  app.use(logger("tiny"));
  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app });
  const PORT = process.env.PORT;
  await new Promise((r) => app.listen({ port: PORT }, r));

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}
startServer();
