import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeCertainUserFeed: protectedResolver((_, { offset }, { loggedInUser }) =>
      client.feed.findMany({
        where: {
          user: {
            id: loggedInUser.id,
          },
        },
        orderBy: [
          {
            id: "desc",
          },
        ],
        take: 2,
        skip: offset,
        include: {
          user: true,
          likes: true,
          comments: true,
        },
      })
    ),
  },
};
