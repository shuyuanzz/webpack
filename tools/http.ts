import axios from "axios";
export default class Http {
  constructor(baseURL: string) {
    axios.defaults.baseURL = baseURL;
  }
  get(path: string) {
    return axios.get(path);
  }
  post(path: string, body: any) {
    return axios.post(path, body);
  }
}
