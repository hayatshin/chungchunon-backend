import client from "../../client";

export default {
  Query: {
    seePoemComments: (_, { id }) =>
      client.poemcomment.findMany({
        where: { poemId: id },
        orderBy: {
          id: "desc",
        },
        include: {
          user: true,
        },
      }),
  },
};
