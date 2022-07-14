import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    togglePoemLike: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const selectPoem = await client.poem.findUnique({
        where: {
          id,
        },
      });
      if (!selectPoem) {
        return {
          ok: false,
          error: "선택하신 시를 찾을 수 없습니다.",
        };
      }
      const likeWhere = {
        poemId_userId: {
          userId: loggedInUser.id,
          poemId: id,
        },
      };
      const like = await client.poemlike.findUnique({
        where: likeWhere,
      });
      if (like) {
        await client.poemlike.delete({
          where: likeWhere,
        });
      } else {
        await client.poemlike.create({
          data: {
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            poem: {
              connect: {
                id: selectPoem.id,
              },
            },
          },
        });
      }
      return {
        ok: true,
      };
    }),
  },
};
