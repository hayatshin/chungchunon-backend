import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeMeFeedPoem: protectedResolver(
      async (_, { offset }, { loggedInUser }) => {
        const [feeds, poems] = await Promise.all([
          client.feed.findMany({
            where: {
              userId: loggedInUser.id,
            },
            include: {
              user: true,
            },
          }), // add whatever filters you need to the "findMany" call
          client.poem.findMany({
            where: {
              userId: loggedInUser.id,
            },
            include: {
              user: true,
            },
          }),
        ]);
        const dataToSort = [...feeds, ...poems];
        const sortedData = dataToSort.sort((itemA, itemB) => {
          return (
            new Date(itemB.createdAt).getTime() -
            new Date(itemA.createdAt).getTime()
          );
        });
        return sortedData.slice(parseInt(offset), parseInt(offset + 2));
      }
    ),
  },
};
