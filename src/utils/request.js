import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://10.10.0.199:20000/",
  //   withCredentials: true,
  headers: {
    //  Authorization: "Bearer " + getToken("set-token"),
    // "Content-Type": "application/json",
  },
});

HTTP.interceptors.request.use(
  (config) => {
    // do something before request is sent
    console.log("quang", config);
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
HTTP.interceptors.response.use(
  (response) => {
    console.log("hieu", response);
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.errors) {
      console.log("xxxxx");

      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },

  (error) => {
    let type = error.response.status === 400 ? "warning" : "error";
    let message = error.response.data.message;
    console.log("yyy", type, message);

    return Promise.reject(error);
  }
);

export default HTTP;
