import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import moment from "moment";

export default {
  Query: {
    seeAllCommentOrder: protectedResolver(() => {
      const startOfMonth = new Date(
        moment().startOf("month").format("YYYY-MM-DD hh:mm").substring(0, 10)
      );
      const endOfMonth = new Date(
        moment().endOf("month").format("YYYY-MM-DD hh:mm").substring(0, 10)
      );
      return client.user.findMany({
        where: {
          likes: {
            some: {
              createdAt: {
                gte: startOfMonth,
                lt: endOfMonth,
              },
            },
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
