import client from "../../client";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { multipleUploadToAWS, uploadToAWS } from "../../shared/shared.utils";

export default {
  Upload: GraphQLUpload,

  Mutation: {
    createFeed: async (_, { photos, caption }, { loggedInUser }) => {
      try {
        // photos - AWS 업로드 (ps. photos = multiple String)
        let photoURL = [];
        if (photos) {
          photoURL = await multipleUploadToAWS(photos, loggedInUser.id, "feed");
          await client.feed.create({
            data: {
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
              photos: photoURL,
              caption,
            },
          });
        }
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: `피드를 생성할 수 없습니다. ${e}`,
        };
      }
    },
  },
};
