import axios from "axios";
const KEY = "AIzaSyBKV0f-Toa2_kNNE-vPYhvMbMQTb0D8CfU";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxPresults: 5,
    key: KEY,
  },
});
