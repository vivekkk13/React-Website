import axios from "axios";

export const LoginApiData = (values) => {
  return axios({
    method: "POST",
    url: "https://dummyjson.com/auth/login",
    data: values,
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
