import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deleteFeed: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const selectFeed = await client.feed.findUnique({
        where: { id },
      });
      if (!selectFeed) {
        return {
          ok: false,
          error: "선택하신 피드를 찾을 수  없습니다.",
        };
      } else if (selectFeed.userId !== loggedInUser.id) {
        return {
          ok: false,
          error: "작성자만 게시글을 삭제할 수 있습니다.",
        };
      } else {
        await client.feed.delete({
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
