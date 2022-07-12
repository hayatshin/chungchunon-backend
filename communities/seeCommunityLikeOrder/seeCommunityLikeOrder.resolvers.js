import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeCommunityLikeOrder: protectedResolver((_, { id }) => {
      return client.user.findMany({
        where: {
          community: {
            id,
          },
        },
        orderBy: {
          likes: {
            _count: "desc",
          },
        },
        take: 10,
      });
    }),
  },
};
