import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeCertainUserFeed: protectedResolver((_, { userName }) =>
      client.feed.findMany({
        where: {
          user: {
            name: userName,
          },
        },
        include: {
          user: true,
          likes: true,
          comments: true,
        },
      })
    ),
  },
};
