import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export const login = (username, password) =>
  API.post("/auth/login", { username, password });
export const register = (email, username, password) =>
  API.post("/auth/register", { email, username, password });

export const addCustomer = (customerDetails) =>
  API.post("/customer", customerDetails);
export const getCustomers = () => API.get("/customer");

export const addInvoice = (invoiceDetails) =>
  API.post("/invoice", invoiceDetails);
export const getInvoices = () => API.get("/invoice");
