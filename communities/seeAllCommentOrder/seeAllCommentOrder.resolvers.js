import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeAllCommentOrder: protectedResolver(() => {
      return client.user.findMany({
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
