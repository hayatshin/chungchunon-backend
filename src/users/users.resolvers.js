import client from "../client";
import moment from "moment";

const lastweekStart = new Date(
  moment().subtract(1, "weeks").startOf("week").startOf("day")
);
const lastweekEnd = new Date(
  moment().subtract(1, "weeks").endOf("week").endOf("day")
);
const thisweekStart = new Date(moment().startOf("week").startOf("day"));
const today = moment().endOf("day");

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
                lte: today,
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
                lte: today,
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
                lte: today,
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
                lte: today,
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
                lte: today,
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
                lte: today,
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
                lte: lastweekEnd,
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
                lte: lastweekEnd,
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
                lte: lastweekEnd,
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
                lte: lastweekEnd,
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
                lte: lastweekEnd,
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
                lte: lastweekEnd,
              },
            },
          ],
        },
      }),
  },
};
