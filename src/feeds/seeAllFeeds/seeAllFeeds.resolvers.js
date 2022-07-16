import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeAllFeeds: protectedResolver((_, { offset }, { loggedInUser }) =>
      client.feed.findMany({
        orderBy: [
          {
            id: "desc",
          },
        ],
        take: 2,
        skip: offset,
        include: {
          user: true,
        },
      })
    ),
  },
};
