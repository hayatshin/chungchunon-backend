import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeAllPoems: protectedResolver((_, { offset }, { loggedInUser }) =>
      client.poem.findMany({
        orderBy: [
          {
            id: "desc",
          },
        ],
        take: 2,
        skip: offset,
        include: {
          user: true,
        },
      })
    ),
  },
};
