import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deletePoem: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const selectPoem = await client.poem.findUnique({
        where: { id },
      });
      if (!selectPoem) {
        return {
          ok: false,
          error: "선택하신 시를 찾을 수  없습니다.",
        };
      } else if (selectPoem.userId !== loggedInUser.id) {
        return {
          ok: false,
          error: "작성자만 시를 삭제할 수 있습니다.",
        };
      } else {
        await client.poem.delete({
          where: {
            id,
          },
        });
        return {
          ok: true,
        };
      }
    }),
  },
};
