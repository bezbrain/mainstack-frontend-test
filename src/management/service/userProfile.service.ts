import axios from "axios";
import { baseUrl } from "../../utils/config";

const getUserProfile = async () => {
  const data = await axios.get(`${baseUrl.url}/user`);
  return data;
};

export default getUserProfile;
