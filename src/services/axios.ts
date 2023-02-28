import axios from 'axios';
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_SERVER_URL,
});
export default api