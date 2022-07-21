import client from "../client";
import moment from "moment";

const lastweekStart = new Date(
  moment().subtract(1, "weeks").startOf("week").format("YYYY-MM-DD")
).setHours(0, 0, 0, 0);
const lastweekEnd = new Date(
  moment().subtract(1, "weeks").endOf("week").format("YYYY-MM-DD")
).setHours(24, 0, 0, 0);
const thisweekStart = new Date(
  moment().startOf("week").format("YYYY-MM-DD")
).setHours(0, 0, 0, 0);
const today = new Date(moment().format("YYYY-MM-DD")).setHours(24, 0, 0, 0);

export default {
  User: {
    thisweekLikeNumber: async ({ id }) => {
      const feedLikeNumber = await client.like.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: thisweekStart,
                lt: today,
              },
            },
          ],
        },
      });
      const poemLikeNumber = await client.poemlike.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: thisweekStart,
                lt: today,
              },
            },
          ],
        },
      });
      return parseInt(feedLikeNumber) + parseInt(poemLikeNumber);
    },
    thisweekCommentNumber: async ({ id }) => {
      const feedCommentNumber = await client.comment.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: thisweekStart,
                lt: today,
              },
            },
          ],
        },
      });
      const poemCommentNumber = await client.poemcomment.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: thisweekStart,
                lt: today,
              },
            },
          ],
        },
      });
      return parseInt(feedCommentNumber) + parseInt(poemCommentNumber);
    },
    thisweekFeedNumber: ({ id }) =>
      client.feed.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: thisweekStart,
                lt: today,
              },
            },
          ],
        },
      }),
    thisweekPoemNumber: ({ id }) =>
      client.poem.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: thisweekStart,
                lt: today,
              },
            },
          ],
        },
      }),
    lastweekLikeNumber: async ({ id }) => {
      const feedLikeNumber = await client.like.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: lastweekStart,
                lt: lastweekEnd,
              },
            },
          ],
        },
      });
      const poemLikeNumber = await client.poemlike.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: lastweekStart,
                lt: lastweekEnd,
              },
            },
          ],
        },
      });
      return parseInt(feedLikeNumber) + parseInt(poemLikeNumber);
    },
    lastweekCommentNumber: async ({ id }) => {
      const feedCommentNumber = await client.comment.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: lastweekStart,
                lt: lastweekEnd,
              },
            },
          ],
        },
      });
      const poemCommentNumber = await client.poemcomment.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: lastweekStart,
                lt: lastweekEnd,
              },
            },
          ],
        },
      });
      return parseInt(feedCommentNumber) + parseInt(poemCommentNumber);
    },
    lastweekFeedNumber: ({ id }) =>
      client.feed.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: lastweekStart,
                lt: lastweekEnd,
              },
            },
          ],
        },
      }),
    lastweekPoemNumber: ({ id }) =>
      client.poem.count({
        where: {
          AND: [
            {
              userId: id,
            },
            {
              createdAt: {
                gte: lastweekStart,
                lt: lastweekEnd,
              },
            },
          ],
        },
      }),
  },
};
