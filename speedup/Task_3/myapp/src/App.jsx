import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchTransactions = (month, page, perPage, search) =>
  api.get("/transactions", { params: { month, page, perPage, search } });

export const fetchStatistics = (month) =>
  api.get("/statistics", { params: { month } });

export const fetchBarChartData = (month) =>
  api.get("/barchart", { params: { month } });

export const fetchPieChartData = (month) =>
  api.get("/piechart", { params: { month } });

export const fetchCombinedData = (month) =>
  api.get("/combined", { params: { month } });
