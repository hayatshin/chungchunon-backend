import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeCertainPoem: protectedResolver((_, { id }) =>
      client.poem.findUnique({
        where: {
          id,
        },
        include: {
          user: true,
        },
      })
    ),
  },
};
