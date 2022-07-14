import client from "../../client";

export default {
  Query: {
    seeCommunityUsers: (_, { id }) =>
      client.user.findMany({
        where: {
          community: {
            id,
          },
        },
        include: {
          community: true,
        },
      }),
  },
};
