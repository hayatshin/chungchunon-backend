import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import moment from "moment";

export default {
  Mutation: {
    createPedometer: protectedResolver(
      async (_, { stepCount }, { loggedInUser }) => {
        const startOfDay = new Date(
          moment().format("YYYY-MM-DD HH:mm").substring(0, 10)
        );
        const endOfDay = new Date(
          moment().add(1, 'day').format("YYYY-MM-DD HH:mm").substring(0, 10)
        );
        const todayPedometer = await client.pedometer.findFirst({
          where: {
            AND: [
              {
                userId: loggedInUser.id,
              },
              {
                createdAt: {
                  gte: startOfDay,
                  lte: endOfDay,
                },
              },
            ],
          },
          select: {
            id: true,
          },
        });
        if (todayPedometer) { // 오늘걸음수가 한번 기입된 후에는 계속 업데이트
          return client.pedometer.update({
            where: {
              id: todayPedometer.id,
            },
            data: {
              stepCount,
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
            },
            include: {
              user: true,
            },
          });
        } else {
          return client.pedometer.create({
            data: {
              stepCount,
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
            },
            include: {
              user: true,
            },
          });
        }
      }
    ),
  },
};
