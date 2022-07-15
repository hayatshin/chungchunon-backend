import client from "../client";

export default {
  Feedpoem: {
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
      const ok =
        (await client.poemlike.findUnique({
          where: {
            poemId_userId: {
              poemId: id,
              userId: loggedInUser.id,
            },
          },
          select: {
            id: true,
          },
        })) ||
        (await client.like.findUnique({
          where: {
            feedId_userId: {
              feedId: id,
              userId: loggedInUser.id,
            },
          },
          select: {
            id: true,
          },
        }));
      if (ok) {
        return true;
      }
      return false;
    },
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
  },
};
