import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeAllFeedPoem: protectedResolver(
      async (_, { offset }, { loggedInUser }) => {
        const [feeds, poems] = await Promise.all([
          client.feed.findMany({
            include: {
              user: true,
            },
          }), // add whatever filters you need to the "findMany" call
          client.poem.findMany({
            include: {
              user: true,
            },
          }),
        ]);
        const dataToSort = [...feeds, ...poems];
        const sortedData = dataToSort.sort((itemA, itemB) => {
          return (
            new Date(itemA.createdAt).getTime() -
            new Date(itemB.createdAt).getTime()
          );
        });
        return sortedData.slice(parseInt(offset), parseInt(offset + 2));
      }
    ),
  },
};
