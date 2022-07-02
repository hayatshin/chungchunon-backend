import { protectedResolver } from "../../users/users.utils";
import client from "../../client";

export default {
  Mutation: {
    toggleLike: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const selectPhoto = await client.feed.findUnique({
        where: {
          id,
        },
      });
      if (!selectPhoto) {
        return {
          ok: false,
          error: "선택하신 게시글을 찾을 수 없습니다.",
        };
      }
      const likeWhere = {
        feedId_userId: {
          userId: loggedInUser.id,
          feedId: id,
        },
      };
      const like = await client.like.findUnique({
        where: likeWhere,
      });
      if (like) {
        await client.like.delete({
          where: likeWhere,
        });
      } else {
        await client.like.create({
          data: {
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            feed: {
              connect: {
                id: selectPhoto.id,
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
