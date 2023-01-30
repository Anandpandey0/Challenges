import axios from "axios";

//baseUrl is basically used to make requests with the movie database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
