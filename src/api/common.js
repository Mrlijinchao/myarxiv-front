import serviceAxios from "./utils/request.js";


export const getHomeInfo = (params) => {
  return serviceAxios({
    url: "/home/getHomeInfo",
    method: "get",
    params,
  });
};

export const getPaperInfoById = (params) => {
  return serviceAxios({
    url: "/home/getPapers",
    method: "get",
    params,
  });
};