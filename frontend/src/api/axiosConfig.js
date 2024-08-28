import axios from "axios";

export default axios.create({
  baseURL: "https://5bc8-79-22-84-65.ngrok-free.app",
  headers: {"ngrok-skip-browser-warning":"true"}
});
