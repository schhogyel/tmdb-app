export const getRatingColor = votes => {
  let rating = parseInt(votes);
  switch (true) {
    case rating >= 8:
      return "primary";
    case rating >= 5:
      return "secondary";
    case rating >= 0:
      return "error";
    default:
      return "error";
  }
};
