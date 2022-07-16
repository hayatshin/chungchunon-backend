import client from "../../client";
import { uploadToAWS } from "../../shared/shared.utils";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    editProfile: protectedResolver(
      async (
        _,
        { birthday, gender, cellphone, name, avatar, bio, region, community },
        { loggedInUser }
      ) => {
        // avatar - AWS 업로드
        let avatarURL = null;
        if (avatar) {
          avatarURL = await uploadToAWS(avatar, birthday, "avatar");
        }
        const ok = await client.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            birthday,
            gender,
            cellphone,
            name,
            ...(avatarURL && { avatar: avatarURL }),
            bio,
            region,
            community: {
              connect: {
                communityName: community,
              },
            },
          },
        });
        if (ok) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "프로필을 수정할 수 없습니다.",
          };
        }
      }
    ),
  },
};
