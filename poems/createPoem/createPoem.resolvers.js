import client from "../../client";

export default {
  Mutation: {
    createPoem: async (_, { poemTitle, poemCaption }, { loggedInUser }) =>
      client.poem.create({
        data: {
          user: {
            connect: {
              id: loggedInUser.id,
            },
          },
          poemTitle,
          poemCaption,
        },
        include: {
          user: true,
        },
      }),
  },
};
