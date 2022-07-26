import jwt from "jsonwebtoken";
import client from "../../client";

export default {
  Mutation: {
    login: async (_, { cellphone }) => {
      const user = await client.user.findUnique({ where: { cellphone } });
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
