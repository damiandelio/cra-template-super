import axiosLoader from "./utils/axiosLoader";

/**
 *  This is an example usage of this file.
 *  Feel free to write your own constants and axios configs here.
 **/

// const APY_KEY = "";
const URL_BASE = "https://jsonplaceholder.typicode.com";
const URL_COMMENTS = URL_BASE + "/comments";

export const getCommentsCfg = postId => ({
  method: "get",
  url: URL_COMMENTS,
  headers: {},
  params: {
    postId,
  },
});

export default axiosLoader;
