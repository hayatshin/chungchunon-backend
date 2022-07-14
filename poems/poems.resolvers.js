import client from "../client";

export default {
  Poem: {
    poemLikeNumber: ({ id }) =>
      client.poemlike.count({
        where: {
          poemId: id,
        },
      }),
    poemCommentNumber: ({ id }) =>
      client.poemcomment.count({
        where: {
          poemId: id,
        },
      }),
    poemComments: ({ id }) =>
      client.poemcomment.findMany({
        where: {
          poemId: id,
        },
        include: {
          user: true,
        },
      }),
    isMine: ({ userId }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return userId === loggedInUser.id;
    },
    isLiked: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const ok = await client.poemlike.findUnique({
        where: {
          poemId_userId: {
            poemId: id,
            userId: loggedInUser.id,
          },
        },
        select: {
          id: true,
        },
      });
      if (ok) {
        return true;
      }
      return false;
    },
  },
};
