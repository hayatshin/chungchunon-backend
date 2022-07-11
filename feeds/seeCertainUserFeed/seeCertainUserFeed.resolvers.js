import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeCertainUserFeed: protectedResolver((_, { userName, offset }) =>
      client.feed.findMany({
        where: {
          user: {
            name: userName,
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
