import client from "../../client";

export default {
  Query: {
    seeAdminAllPoems: (_, __, { loggedInUser }) =>
      client.poem.findMany({
        orderBy: [
          {
            id: "desc",
          },
        ],
        include: {
          user: true,
        },
      }),
  },
};
