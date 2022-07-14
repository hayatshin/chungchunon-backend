import client from "../../client";

export default {
  Query: {
    seePoemLikes: async (_, { id }, { loggedInUser }) => {
      const poemLikes = await client.poemlike.findMany({
        where: {
          poemId: id,
        },
        select: {
          user: true,
        },
      });
      return poemLikes.map((like) => like.user);
    },
  },
};
