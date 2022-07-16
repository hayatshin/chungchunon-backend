import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  try {
    if (!token) {
      return null;
    }
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await client.user.findUnique({
      where: {
        id,
      },
    });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export const protectedResolver =
  (ourResolver) => (root, args, context, info) => {
    if (!context.loggedInUser) {
      return {
        ok: false,
        error: "로그인 후 가능합니다.",
      };
    }
    return ourResolver(root, args, context, info);
  };
