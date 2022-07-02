import client from "../../client";
import { multipleUploadToAWS } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editFeed: protectedResolver(
      async (_, { id, photos, caption }, { loggedInUser }) => {
        // 피드 검색
        const oldFeed = await client.feed.findFirst({
          where: {
            id,
            useId: loggedInUser.id,
          },
        });
        // 피드가 없는 경우
        if (!oldFeed) {
          return {
            ok: false,
            error: "게시글을 찾을 수  없습니다.",
          };
        }
        // 사진 업데이트 URL
        let newPhotoURL = [];
        if (photos) {
          newPhotoURL = await multipleUploadToAWS(
            photos,
            loggedInUser.id,
            "feed"
          );
        }
        // 피드 업데이트
        await client.feed.update({
          where: {
            id,
          },
          data: {
            ...(photos && { photos: newPhotoURL }),
            ...(caption && { caption }),
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
