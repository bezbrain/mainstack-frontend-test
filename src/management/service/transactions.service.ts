import axios from "axios";
import { baseUrl } from "../../utils/config";

const getTransactions = async () => {
  const data = await axios.get(`${baseUrl.url}/transactions`);
  return data;
};

export default getTransactions;
