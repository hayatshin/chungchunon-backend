import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import moment from "moment";

export default {
  Query: {
    seeCommunityCommentOrder: protectedResolver((_, { id }) => {
      const startOfMonth = new Date(
        moment().startOf("month").format("YYYY-MM-DD hh:mm").substring(0, 10)
      );
      const endOfMonth = new Date(
        moment().endOf("month").format("YYYY-MM-DD hh:mm").substring(0, 10)
      );

      return client.user.findMany({
        where: {
          AND: [
            {
              likes: {
                some: {
                  createdAt: {
                    gte: startOfMonth,
                    lt: endOfMonth,
                  },
                },
              },
            },
            {
              community: {
                id,
              },
            },
          ],
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
