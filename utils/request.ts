import axios from "axios";
import config from "../config"

const request = axios.create({
  baseURL: config.API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export default request



// import axios from "axios";
// import config from "../config"

// const request = axios.create({
//   baseURL: `${config.PT}://${config.HOST}:${config.BACKEND_PORT}`,
//   withCredentials: true,
//   headers: {
//     "Content-type": "application/json",
//   },
// });

// export default request