import axios from "axios";

export default axios.create({
  baseURL: "http://139.59.72.105:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
