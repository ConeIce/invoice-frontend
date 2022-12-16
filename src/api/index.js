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
export const getCustomer = (id) => API.get(`/customer/${id}`);

export const addInvoice = (invoiceDetails) =>
  API.post("/invoice", invoiceDetails);
export const getInvoices = () => API.get("/invoice");

export const getCustomerInvoices = (customerId) =>
  API.get(`/invoice?customerId=${customerId}`);

export const editCustomer = (editedCustomer) =>
  API.put("/customer", editedCustomer);

export const editGSTIN = (GSTIN) => API.put("details/gst", GSTIN);

export const getGSTIN = () => API.get("details/gst");
