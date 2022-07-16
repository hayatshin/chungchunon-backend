import express from "express";
import logger from "morgan";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";
import twilio from "twilio";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
require("dotenv").config();

const PORT = parseInt(process.env.PORT);

const accountSID = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const servcieId = process.env.SERVICE_ID;

// const twillioClient = new twilio(accountSID, authToken);

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: async ({ req }) => {
      return {
        loggedInUser: await getUser(req.headers.token),
      };
    },
  });

  await server.start();
  const app = express();
  app.use(logger("tiny"));
  app.use(graphqlUploadExpress());

  // app.get("/verify/:to", async (req, res) => {
  //   const to = `+82${req.params.to.replaceAll("-", "").substring(1, 11)}`;

  //   twillioClient.verify
  //     .services(servcieId)
  //     .verifications.create({
  //       to,
  //       channel: "sms",
  //     })
  //     .then((verification) => {
  //       res.json(verification);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });

  // app.get("/check/:to/:code", async (req, res) => {
  //   const to = `+82${req.params.to.replaceAll("-", "").substring(1, 11)}`;
  //   const code = req.params.code;
  //   twillioClient.verify
  //     .services(servcieId)
  //     .verificationChecks.create({ to, code })
  //     .then((verification) => {
  //       res.json(verification);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });

  server.applyMiddleware({ app });
  await new Promise((r) => app.listen({ port: PORT }, r));

  console.log(`🚀 Server ready at http://localhost:${PORT}`);
}
startServer();
