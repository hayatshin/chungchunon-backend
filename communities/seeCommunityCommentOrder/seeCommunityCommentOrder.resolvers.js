import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeCommunityCommentOrder: protectedResolver((_, { id }) => {
      return client.user.findMany({
        where: {
          community: {
            id,
          },
        },
        orderBy: {
          comments: {
            _count: "desc",
          },
        },
        take: 10,
      });
    }),
  },
};
