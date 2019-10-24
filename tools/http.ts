import axios from "axios";
export default class Http {
  constructor(baseURL: string) {
    axios.defaults.baseURL = baseURL;
  }
  get(path: string, config?: any) {
    return axios.get(path,config);
  }
  post(path: string, body: any) {
    return axios.post(path, body);
  }
}
