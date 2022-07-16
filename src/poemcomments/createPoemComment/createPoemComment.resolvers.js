import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createPoemComment: protectedResolver(
      async (_, { poemId, payload }, { loggedInUser }) => {
        const ok = await client.poem.findUnique({
          where: {
            id: poemId,
          },
          select: {
            id: true,
          },
        });
        if (!ok) {
          return {
            ok: false,
            error: "게시글을 찾을 수 없습니다.",
          };
        }
        return client.poemcomment.create({
          data: {
            payload,
            poem: {
              connect: {
                id: poemId,
              },
            },
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
          include: {
            user: true,
            poem: true,
          },
        });
      }
    ),
  },
};
