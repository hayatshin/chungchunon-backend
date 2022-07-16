import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeCertainFeed: protectedResolver((_, { id }) =>
      client.feed.findUnique({
        where: {
          id,
        },
        include: {
          user: true,
        },
      })
    ),
  },
};
