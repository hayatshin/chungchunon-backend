import client from "../../client";

export default {
  Query: {
    seeAllCommunities: () =>
      client.community.findMany({
        include: {
          user: true,
        },
      }),
  },
};
