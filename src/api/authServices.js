import HTTP from "../utils/request";

// export const logIn = async (data) => {
//   try {
//     const res = await HTTP.post("/user/login", data);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const logIn = async (query) => {
//   try {
//     const res = await request.get("/user/login", {
//       params: query,
//     });
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

class AuthService {
  logIn(data) {
    return HTTP.post("/api/Auth/dang-nhap", data);
  }

  xxxx(data) {
    return HTTP.get("/user/login", {
      params: query,
    });
  }
}

export default new AuthService();
