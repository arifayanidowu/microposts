/**
 * EasyHTTP Library
 * Library for making HTTP Requests
 *
 * @version 3.0.0
 * @author Arifayan Idowu
 * @license MIT
 *
 */

class EasyHTTP {
  async get(url) {
    const response = await fetch(url);
    const resData = response.json();
    return resData;
  }
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = response.json();
    return resData;
  }
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = response.json();
    return resData;
  }
  async delete(url) {
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const resData = await "Resource Deleted...";
    return resData;
  }
}

export const http = new EasyHTTP();
