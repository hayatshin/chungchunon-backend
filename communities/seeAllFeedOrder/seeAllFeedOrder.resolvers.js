import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import moment from "moment";

export default {
  Query: {
    seeAllFeedOrder: protectedResolver(() => {
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
          feeds: {
            _count: "desc",
          },
        },
        take: 10,
      });
    }),
  },
};
