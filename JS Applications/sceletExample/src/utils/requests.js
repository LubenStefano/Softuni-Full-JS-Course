import { userService } from "../service/userService.js";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const userToken = userService.getUserToken(); // Corrected to userToken

  if (userToken) {
    options.headers["X-Authorization"] = userToken;
  }

  try {
    const response = await fetch(url, options);


    if (!response.ok) {
      if (response.status == 403) {
        userService.removeUser();
      }
      const error = await response.json();
      throw new Error(error.message);
    }

    // Check if response body is empty
    const text = await response.text();
    if (!text) {
      return null;
    }

    // Try to parse JSON
    try {
      const data = JSON.parse(text);
  
      return data;
    } catch (e) {
      throw new Error("Invalid JSON response");
    }
  } catch (error) {
    alert(error.message); // Display the error to the user
    throw error; // Re-throw the original error
  }
}

async function get(url) {
  return request("GET", url);
}
async function post(url, data) {
  return request("POST", url, data);
}
async function put(url, data) {
  return request("PUT", url, data);
}
async function remove(url) {
  return request("DELETE", url);
}

export const api = {
  get,
  post,
  put,
  remove,
};
