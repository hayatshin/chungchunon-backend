import client from "../client";

export default {
  User: {
    directLikeNumber: ({ id }) =>
      client.like.count({
        where: {
          userId: id,
        },
      }),
    directCommentNumber: ({ id }) =>
      client.comment.count({
        where: {
          userId: id,
        },
      }),
    directFeedNumber: ({ id }) =>
      client.feed.count({
        where: {
          userId: id,
        },
      }),
  },
};
