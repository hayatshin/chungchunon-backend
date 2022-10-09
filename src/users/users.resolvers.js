import client from "../client";
import moment from "moment";
import { parse } from "dotenv";

const lastweekStart = new Date(
  moment().subtract(1, "weeks").startOf("week").startOf("day")
);
const lastweekEnd = new Date(
  moment().subtract(1, "weeks").endOf("week").endOf("day")
);
const thisweekStart = new Date(moment().startOf("week").startOf("day"));
const today = new Date(moment().endOf("day"));

export default {
  User: {
    totalPointNumber: async ({ id }) => {
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
      const feedNumber = await client.feed.count({
        where: {
          userId: id,
        },
      });
      const poemNumber = await client.poem.count({
        where: {
          userId: id,
        },
      });
      return (
        (parseInt(feedLikeNumber) + parseInt(poemLikeNumber)) * 1 +
        (parseInt(feedCommentNumber) + parseInt(poemCommentNumber)) * 2 +
        parseInt(poemNumber) * 10 +
        parseInt(feedNumber) * 10
      );
    },
    totalLikeNumber: async ({ id }) => {
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
    totalCommentNumber: async ({ id }) => {
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
    totalFeedNumber: ({ id }) =>
      client.feed.count({
        where: {
          userId: id,
        },
      }),
    totalPoemNumber: ({ id }) =>
      client.poem.count({
        where: {
          userId: id,
        },
      }),
    thisweekPointNumber: async ({ id }) => {
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
      const feedNumber = await client.feed.count({
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
      const poemNumber = await client.poem.count({
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
      const stepNumber = await client.pedometer.aggregate({
        _sum: {
          stepCount: true,
        },
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
      return (
        (parseInt(feedLikeNumber) + parseInt(poemLikeNumber)) * 1 +
        (parseInt(feedCommentNumber) + parseInt(poemCommentNumber)) * 2 +
        parseInt(poemNumber) * 10 +
        parseInt(feedNumber) * 10 +
        Math.floor(stepNumber / 1000) * 1
      );
    },
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
    thisweekStepNumber: async ({ id }) => {
      const steps = await client.pedometer.aggregate({
        _sum: {
          stepCount: true,
        },
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
      return steps._sum.stepCount || 0;
    },
    lastweekPointNumber: async ({ id }) => {
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
      const feedNumber = await client.feed.count({
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
      const poemNumber = await client.poem.count({
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
      const stepNumber = await client.pedometer.aggregate({
        _sum: {
          stepCount: true,
        },
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
      return (
        (parseInt(feedLikeNumber) + parseInt(poemLikeNumber)) * 1 +
        (parseInt(feedCommentNumber) + parseInt(poemCommentNumber)) * 2 +
        parseInt(poemNumber) * 10 +
        parseInt(feedNumber) * 10 +
        Math.floor(stepNumber / 1000) * 1
      );
    },
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
    lastweekStepNumber: async ({ id }) => {
      const steps = await client.pedometer.aggregate({
        _sum: {
          stepCount: true,
        },
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
      return steps._sum.stepCount || 0;
    },
  },
};
