import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeAllFeedOrder: protectedResolver(() => {
      return client.user.findMany({
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
