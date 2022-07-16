import client from "../../client";

export default {
  Query: {
    seeFeedComments: (_, { id }) =>
      client.comment.findMany({
        where: { feedId: id },
        orderBy: {
          id: "desc",
        },
        include: {
          user: true,
        },
      }),
  },
};
