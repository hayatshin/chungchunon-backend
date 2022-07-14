import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeCertainUserPoem: protectedResolver((_, { id, offset }) =>
      client.poem.findMany({
        where: {
          user: {
            id,
          },
        },
        orderBy: [
          {
            id: "desc",
          },
        ],
        take: 2,
        skip: offset,
        include: {
          user: true,
          poemLikes: true,
          poemComments: true,
        },
      })
    ),
  },
};
