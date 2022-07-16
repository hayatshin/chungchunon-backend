import client from "../../client";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { uploadToAWS } from "../../shared/shared.utils";

export default {
  Upload: GraphQLUpload,

  Mutation: {
    createCommunity: async (_, { communityName, communityLogo }) => {
      try {
        // communityLogo
        let communityURL = null;
        communityURL = await uploadToAWS(
          communityLogo,
          communityName,
          "community"
        );
        await client.community.create({
          data: {
            communityName,
            communityLogo: communityURL,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: `${e}`,
        };
      }
    },
  },
};
