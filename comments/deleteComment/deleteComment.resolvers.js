import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deleteComment: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const selectComment = await client.comment.findUnique({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      });
      if (!selectComment) {
        return {
          ok: false,
          error: "해당 댓글이 존재하지 않습니다.",
        };
      } else if (selectComment.userId !== loggedInUser.id) {
        return {
          ok: false,
          error: "작성자만 댓글을 삭제할 수 있습니다.",
        };
      } else {
        await client.comment.delete({
          where: {
            id,
          },
        });
        return {
          ok: true,
          id,
        };
      }
    }),
  },
};
