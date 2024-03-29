import client from "../../client";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { uploadToAWS } from "../../shared/shared.utils";

export default {
  Upload: GraphQLUpload,

  Mutation: {
    createAccount: async (
      _,
      {
        birthyear,
        birthday,
        gender,
        cellphone,
        name,
        avatar,
        age,
        kakaoId,
        bio,
        region,
        community,
      }
    ) => {
      try {
        // 핸드폰 번호 DB에 있는지 확인
        const existingUser = await client.user.findFirst({
          where: {
            kakaoId,
          },
        });
        if (existingUser) {
          throw new Error("해당 번호는 이미 가입된 번호입니다.");
        }

        // avatar - AWS 업로드 (ps. avatar = String)

        let avatarURL = null;
        if (avatar) {
          avatarURL = await uploadToAWS(avatar, birthday, "avatar");
        }

        // 유저 저장 및 리턴
        await client.user.create({
          data: {
            kakaoId,
            birthyear,
            birthday,
            gender,
            cellphone,
            name,
            avatar: avatarURL,
            bio,
            region,
            community: {
              connect: {
                communityName: community,
              },
            },
            age,
            master: false,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: `계정을 생성할 수 없습니다. ${e}`,
        };
      }
    },
  },
};
