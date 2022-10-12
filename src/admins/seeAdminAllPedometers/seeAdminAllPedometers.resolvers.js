import client from "../../client";

export default {
  Query: {
    seeAdminAllPedometers: (_, __, { loggedInUser }) =>
      client.pedometer.findMany({
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
