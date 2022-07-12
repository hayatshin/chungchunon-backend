import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeAllLikeOrder: protectedResolver(() => {
      return client.user.findMany({
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
