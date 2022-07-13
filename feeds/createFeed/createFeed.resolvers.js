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
        }
        return client.feed.create({
          data: {
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            ...(photos && { photos: photoURL }),
            caption,
          },
          include: {
            user: true,
            comments: true,
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
