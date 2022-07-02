import client from "../client";

export default {
  Feed: {
    likeNumber: ({ id }) =>
      client.like.count({
        where: {
          feedId: id,
        },
      }),
    commentNumber: ({ id }) =>
      client.comment.count({
        where: {
          feedId: id,
        },
      }),
    comments: ({ id }) =>
      client.comment.findMany({
        where: {
          feedId: id,
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
      const ok = await client.like.findUnique({
        where: {
          feedId_userId: {
            feedId: id,
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
