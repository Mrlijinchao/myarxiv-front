import serviceAxios from "./utils/request.js";

// post请求用 data  get请求用params

// 用户注册

// 根据SubjectId获取二级分类
export const getCategoryBySubjectId = (params) => {
  return serviceAxios({
    url: "/home/getSecondaryCategory",
    method: "get",
    params,
  });
};

// 获取国家、职业状态、学科信息
export const getRegisterInfo = () => {
  return serviceAxios({
    url: "/home/getRegisterNeededInfo",
    method: "get"
  });
};

// 检查用户名(账户)是否已存在
export const checkUserAccount = (params) => {
  return serviceAxios({
    url: "/user/checkUserAccount",
    method: "get",
    params
  });
};

// 发送验证邮件
export const sendVerifyEmail = (data) => {
  return serviceAxios({
    url: "/email/registerVerifies",
    method: "post",
    data
  });
};

// 注册
export const userRegister = (data) => {
  return serviceAxios({
    url: "/user/register",
    method: "post",
    data
  });
};


// 用户登录

// 密码登录
export const passwordLogin = (data) => {
  return serviceAxios({
    url: "/user/login",
    method: "post",
    data
  });
};

// 邮箱登录
export const emailLogin = (data) => {
  return serviceAxios({
    url: "/user/emailLogin",
    method: "post",
    data
  });
};

// 发送登录邮件
export const sendLoginEmail = (data) => {
  return serviceAxios({
    url: "/email/userLoginEmailVerify",
    method: "post",
    data
  });
};

// 根据用户id获取用户信息
export const getUserHomeInfo = (params) => {
  return serviceAxios({
    url: "/user/info",
    method: "get",
    params
  });
};

// 修改用户信息
export const modifyUserInfo = (data) => {
  return serviceAxios({
    url: "/user/changeUserInfo",
    method: "post",
    data
  });
};

// 用户退出登录
export const userLogout = (params) => {
  return serviceAxios({
    url: "/user/logout",
    method: "get",
    params
  });
};

// 修改用户密码
export const modifyUserPassword = (data) => {
  return serviceAxios({
    url: "/user/changeUserPassword",
    method: "post",
    data
  });
};

// 修改用户邮箱
export const modifyUserEmail = (data) => {
  return serviceAxios({
    url: "/user/changeUserEmail",
    method: "post",
    data
  });
};

