import client from "../../client";

export default {
  Query: {
    seeAdminAllLikes: async (_, __, { loggedInUser }) => {
      const [likes, poemlikes] = await Promise.all([
        client.like.findMany({
          include: {
            user: true,
          },
        }), // add whatever filters you need to the "findMany" call
        client.poemlike.findMany({
          include: {
            user: true,
          },
        }),
      ]);
      const dataToSort = [...likes, ...poemlikes];
      const sortedData = dataToSort.sort((itemA, itemB) => {
        return (
          new Date(itemA.createdAt).getTime() -
          new Date(itemB.createdAt).getTime()
        );
      });
      return sortedData;
    },
  },
};
