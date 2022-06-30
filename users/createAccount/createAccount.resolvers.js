import client from "../../client";
import bcrypt from "bcrypt";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { uploadToAWS } from "../../shared/shared.utils";

export default {
  Upload: GraphQLUpload,

  Mutation: {
    createAccount: async (
      _,
      {
        birthday,
        gender,
        cellphone,
        name,
        password,
        avatar,
        bio,
        region,
        community,
      }
    ) => {
      try {
        // 핸드폰 번호 DB에 있는지 확인
        const existingUser = await client.user.findFirst({
          where: {
            cellphone,
          },
        });
        if (existingUser) {
          throw new Error("해당 번호는 이미 가입된 번호입니다.");
        }

        // avatar - AWS에 업로드

        let avatarURL = null;
        if (avatar) {
          avatarURL = await uploadToAWS(avatar, birthday, "avatar");
        }

        // 비밀번호 해쉬
        const uglyPassword = await bcrypt.hash(password, 10);

        // 유저 저장 및 리턴
        await client.user.create({
          data: {
            birthday,
            gender,
            cellphone,
            name,
            password: uglyPassword,
            avatar: avatarURL,
            bio,
            region,
            community: {
              connectOrCreate: {
                where: {
                  communityName: community,
                },
                create: {
                  communityName: community,
                },
              },
            },
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
