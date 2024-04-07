import axios from "axios";
import { baseUrl } from "../../utils/config";

export const getWallet = async () => {
  const data = await axios.get(`${baseUrl.url}/wallet`);
  return data;
};
