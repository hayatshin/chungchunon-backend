export default {
  Comment: {
    isMine: ({ userId }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return fasle;
      }
      return userId === loggedInUser.id;
    },
  },
};
