import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editPoem: protectedResolver(
      async (_, { id, poemTitle, poemCaption }, { loggedInUser }) => {
        const oldPoem = await client.poem.findFirst({
          where: {
            id,
            userId: loggedInUser.id,
          },
        });
        if (!oldPoem) {
          return {
            ok: false,
            error: "해당 시를 찾을 수  없습니다.",
          };
        }
        await client.poem.update({
          where: {
            id,
          },
          data: {
            ...(poemTitle && { poemTitle }),
            ...(poemCaption && { poemCaption }),
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
