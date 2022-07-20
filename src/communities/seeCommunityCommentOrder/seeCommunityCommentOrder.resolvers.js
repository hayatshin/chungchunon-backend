import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import moment from "moment";

// const lastweekStart = new Date(
//   moment().subtract(1, "weeks").startOf("week").format("YYYY-MM-DD")
// );
// const lastweekEnd = new Date(
//   moment().subtract(1, "weeks").endOf("week").format("YYYY-MM-DD")
// );

export default {
  Query: {
    seeCommunityCommentOrder: protectedResolver((_, { id }) => {
      const thisweekStart = new Date(
        moment().startOf("week").format("YYYY-MM-DD")
      );
      const today = moment().format("YYYY-MM-DD");

      return client.user.findMany({
        where: {
          AND: [
            {
              comments: {
                some: {
                  createdAt: {
                    gte: thisweekStart,
                    lt: today,
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
      });
    }),
  },
};
