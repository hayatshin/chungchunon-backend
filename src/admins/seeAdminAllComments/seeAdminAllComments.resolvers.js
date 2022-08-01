import client from "../../client";

export default {
  Query: {
    seeAdminAllComments: async (_, __, { loggedInUser }) => {
      const [comments, poemcomments] = await Promise.all([
        client.comment.findMany({
          include: {
            user: true,
          },
        }), // add whatever filters you need to the "findMany" call
        client.poemcomment.findMany({
          include: {
            user: true,
          },
        }),
      ]);
      const dataToSort = [...comments, ...poemcomments];
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
