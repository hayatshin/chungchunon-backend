import client from "../../client";

export default {
  Query: {
    seeAdminAllFeeds: (_, __, { loggedInUser }) =>
      client.feed.findMany({
        orderBy: [
          {
            id: "desc",
          },
        ],
        include: {
          user: true,
        },
      }),
  },
};
