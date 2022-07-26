import jwt from "jsonwebtoken";
import client from "../../client";

export default {
  Mutation: {
    adminlogin: async (_, { email, password }) => {
      const user = await client.admin.findUnique({
        where: { email },
      });
      if (!user) {
        return {
          ok: false,
          error: "잘못된 이메일 주소입니다.",
        };
      }
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "잘못된 비밀번호입니다.",
        };
      }
      // token 발행
      const token = jwt.sign(
        { id: user.id, type: "admin" },
        process.env.JWT_SECRET
      );
      return {
        ok: true,
        token,
      };
    },
  },
};
