import client from "../../client";

export default {
  Query: {
    seeAllUsers: () =>
      client.user.findMany({
        include: {
          community: true,
        },
      }),
  },
};
