import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import moment from "moment";

export default {
  Query: {
    seeAllFeedOrder: protectedResolver(() => {
      const startOfWeek = new Date(
        moment().startOf("week").format("YYYY-MM-DD hh:mm").substring(0, 10)
      );
      const endOfWeek = new Date(
        moment().endOf("week").format("YYYY-MM-DD hh:mm").substring(0, 10)
      );
      return client.user.findMany({
        where: {
          feeds: {
            some: {
              createdAt: {
                gte: startOfWeek,
                lt: endOfWeek,
              },
            },
          },
        },
        orderBy: {
          feeds: {
            _count: "desc",
          },
        },
      });
    }),
  },
};
