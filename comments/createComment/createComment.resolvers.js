import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createComment: protectedResolver(
      async (_, { feedId, payload }, { loggedInUser }) => {
        const ok = await client.feed.findUnique({
          where: {
            id: feedId,
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
        const newComment = await client.comment.create({
          data: {
            payload,
            feed: {
              connect: {
                id: feedId,
              },
            },
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
