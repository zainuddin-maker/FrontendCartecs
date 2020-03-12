import { getItem } from "./Storage";
const axios = require("axios").default;

axios.interceptors.request.use(
  function(config) {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    if (getItem("TOKEN")) {
      config.headers.Authorization = "Bearer " + getItem("TOKEN");
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    let customError = {
      code: error.response ? error.response.status : 500,
      message: error.response ? error.response.statusText : "Internal Error",
      data: error.response ? error.response.data : {}
    };

    return Promise.reject(customError);
  }
);

const decode = obj => {
  try {
    return new URLSearchParams(obj).toString();
  } catch (error) {
    return false;
  }
};

/**
 * Axios with Method GET
 * @param uri is endpoint from URL
 * @param query is parameter query for get data
 */
export async function RequestGet(uri, query) {
  if (query) {
    query = "?" + decode(query);
  }
  return await axios.get(process.env.REACT_APP_API + uri + (query || ""));
}

/**
 * Axios with method POST
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestPost(uri, data) {
  return await axios.post(process.env.REACT_APP_API + uri, data);
}

/**
 * Axios with method PUT
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestPut(uri, data) {
  return await axios.put(process.env.REACT_APP_API + uri, data);
}

/**
 * Axios with method DELETE
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestDelete(uri) {
  return await axios.delete(process.env.REACT_APP_API + uri);
}
