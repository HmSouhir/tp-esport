import qs from "qs";
import { RESPONSE_TYPE } from "../constants";

const baseUrl = process.env.REACT_APP_URL;
const json = RESPONSE_TYPE.JSON;
const none = RESPONSE_TYPE.NONE;

const formatRequest = ({ data }) => {
  const body = JSON.stringify(data);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  return [body, headers];
};

const parseResponse = {
  json: (response) => response.json(),
  none: (response) => response,
};

const request = async (
  endpoint,
  { data, query, headers = {}, method = "GET", responseType = json }
) => {
  try {
    // Format Data && Headers
    const [body] = formatRequest({ data });
    const header = { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` };

    // Fomat Query
    const queryString = query ? `?${qs.stringify({ ...qs.parse(query) })}` : "";

    // Format Url
    let url = baseUrl + endpoint + queryString;

    // Send Request
    const result = await fetch(url, {
      body,
      method,
      headers: { ...header, ...headers },
    });

    // Format Response
    const type = json || none;
    const res = await parseResponse[type](result);
    if (!result.ok)
      return Promise.reject({
        ...res,
        status: result.status,
      });
    return { data: res, totalItems: result.headers.get("X-Total") };

  } catch (err) {
    return Promise.reject(err);
  }
};

export const api = {
  get: (endpoint, opts) => request(endpoint, { ...opts, method: "GET" }),
  post: (endpoint, opts) => request(endpoint, { ...opts, method: "POST" }),
  put: (endpoint, opts) => request(endpoint, { ...opts, method: "PUT" }),
  patch: (endpoint, opts) => request(endpoint, { ...opts, method: "PATCH" }),
  del: (endpoint, opts) => request(endpoint, { ...opts, method: "DELETE" }),
};
