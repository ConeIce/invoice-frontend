import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

// Auth
export const login = (username, password) =>
  API.post("/auth/login", { username, password });
export const register = (email, username, password) =>
  API.post("/auth/register", { email, username, password });

// Customer
export const addCustomer = (customerDetails) =>
  API.post("/customer", customerDetails);

export const getCustomers = () => API.get("/customer");
export const getCustomer = (id) => API.get(`/customer/${id}`);

export const getCustomerInvoices = (customerId) =>
  API.get(`/invoice?customerId=${customerId}`);

export const editCustomer = (editedCustomer) =>
  API.put("/customer", editedCustomer);

// Invoice
export const addInvoice = (invoiceDetails) =>
  API.post("/invoice", invoiceDetails);

export const getInvoices = () => API.get("/invoice");
export const getInvoice = (id) => API.get(`/invoice/${id}`);

export const downloadInvoice = (invoiceId) =>
  API.get(`/invoice/${invoiceId}/download`, {
    responseType: "arraybuffer",
    headers: {
      Accept: "application/pdf",
    },
  });

// GST/Settings
export const editCompanyDetails = (companyDetails) =>
  API.put("details", companyDetails);

export const getCompanyDetails = () => API.get("details");

// Search
export const searchCustomers = (searchTerm) =>
  API.get(`customer/search/${searchTerm}`);
