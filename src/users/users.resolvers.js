import client from "../client";

export default {
  User: {
    directLikeNumber: async ({ id }) => {
      const feedLikeNumber = await client.like.count({
        where: {
          userId: id,
        },
      });
      const poemLikeNumber = await client.poemlike.count({
        where: {
          userId: id,
        },
      });
      return parseInt(feedLikeNumber) + parseInt(poemLikeNumber);
    },
    directCommentNumber: async ({ id }) => {
      const feedCommentNumber = await client.comment.count({
        where: {
          userId: id,
        },
      });
      const poemCommentNumber = await client.poemcomment.count({
        where: {
          userId: id,
        },
      });
      return parseInt(feedCommentNumber) + parseInt(poemCommentNumber);
    },
    directFeedNumber: ({ id }) =>
      client.feed.count({
        where: {
          userId: id,
        },
      }),
    directPoemNumber: ({ id }) =>
      client.poem.count({
        where: {
          userId: id,
        },
      }),
  },
};
