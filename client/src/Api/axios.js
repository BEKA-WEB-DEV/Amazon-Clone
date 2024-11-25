import axios from "axios";

const axiosInstance = axios.create({
  // firebase deployed
  baseURL : "http://127.0.0.1:5001/clone-7e0cb/us-central1/api"
  //  using render
    // baseURL :'https://amazone-api.onrender.com'
});

export { axiosInstance };