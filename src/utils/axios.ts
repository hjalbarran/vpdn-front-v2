/**
 * axios setup to use mock service
 */

import axios from "axios";
const baseURL = 'http://coyag-pdn.test/api/'

const axiosServices = axios.create({
  baseURL,
});

// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject((error.response && error.response.data) || "Wrong Services")
);

export default axiosServices;
