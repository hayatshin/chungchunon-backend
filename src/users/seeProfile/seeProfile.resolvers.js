import client from "../../client";

export default {
  Query: {
    seeProfile: (_, { id }) =>
      client.user.findUnique({
        where: {
          id,
        },
        include: {
          community: true,
        },
      }),
  },
};
