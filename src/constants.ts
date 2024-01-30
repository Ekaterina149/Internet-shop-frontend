const BASE_URL: string = "http://localhost:3001";

interface HeadersObject {
  [key: string]: string;
}

const SET_DATA_HEADERS: HeadersObject = {
  "Content-Type": "application/json",
};

const AUTH_DATA_HEADERS: HeadersObject = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export { BASE_URL, SET_DATA_HEADERS, AUTH_DATA_HEADERS };