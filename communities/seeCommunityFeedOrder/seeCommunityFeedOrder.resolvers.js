import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeCommunityFeedOrder: protectedResolver((_, { id }) => {
      return client.user.findMany({
        where: {
          community: {
            id,
          },
        },
        orderBy: {
          feeds: {
            _count: "desc",
          },
        },
        take: 10,
      });
    }),
  },
};
