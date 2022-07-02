import client from "../../client";

export default {
  Query: {
    seeFeedLikes: async (_, { id }, { loggedInUser }) => {
      const feedLikes = await client.like.findMany({
        where: {
          feedId: id,
        },
        select: {
          user: true,
        },
      });
      return feedLikes.map((like) => like.user);
    },
  },
};
