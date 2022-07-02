import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editComment: protectedResolver(
      async (_, { id, payload }, { loggedInUser }) => {
        const selectComment = await client.comment.findUnique({
          where: { id },
          select: {
            userId: true,
          },
        });
        if (!selectComment) {
          return {
            ok: false,
            error: "댓글을 찾을 수 없습니다.",
          };
        } else if (selectComment.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: "작성자만 댓글을 수정할 수 있습니다.",
          };
        } else {
          await client.comment.update({
            where: {
              id,
            },
            data: {
              payload,
            },
          });
          return {
            ok: true,
          };
        }
      }
    ),
  },
};
