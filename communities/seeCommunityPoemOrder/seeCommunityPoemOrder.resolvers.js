import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import moment from "moment";

export default {
  Query: {
    seeCommunityPoemOrder: protectedResolver((_, { id }) => {
      const startOfWeek = new Date(
        moment().startOf("week").format("YYYY-MM-DD hh:mm").substring(0, 10)
      );
      const endOfWeek = new Date(
        moment().endOf("week").format("YYYY-MM-DD hh:mm").substring(0, 10)
      );
      return client.user.findMany({
        where: {
          AND: [
            {
              poems: {
                some: {
                  createdAt: {
                    gte: startOfWeek,
                    lt: endOfWeek,
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
          likes: {
            _count: "desc",
          },
        },
      });
    }),
  },
};
