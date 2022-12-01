import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

const login = (username, password) =>
  API.post("/auth/login", { username, password });
const register = (email, username, password) =>
  API.post("/auth/register", { email, username, password });

const addCustomer = (customerDetails) => API.post("/customer", customerDetails);

// const addCustomer = async (customerDetails) => {
//   const jsonRes = await fetch(`${baseUrl}/customer`, {
//     method: "POST",
//     withCredentials: true,
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(customerDetails),
//     credentials: "include",
//   });

//   return jsonRes.json();
// };

export { login, register, addCustomer };
