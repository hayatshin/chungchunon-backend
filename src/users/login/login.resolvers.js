import jwt from "jsonwebtoken";
import client from "../../client";

export default {
  Mutation: {
    login: async (_, { kakaoId }) => {
      const user = await client.user.findUnique({ where: { kakaoId } });
      if (!user) {
        return {
          ok: false,
          error: "존재하지 않는 번호입니다.",
        };
      }
      // token 발행
      const token = jwt.sign(
        { id: user.id, type: "user" },
        process.env.JWT_SECRET
      );
      return {
        ok: true,
        token,
      };
    },
  },
};
