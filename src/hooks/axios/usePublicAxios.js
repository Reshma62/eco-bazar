import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});
const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
