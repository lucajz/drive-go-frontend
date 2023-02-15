import axios from "axios";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const getCars = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/cars`);
  return response.data;
};

const getHotCar = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/hotcar`);
  return response.data;
};

const getCar = async (slug) => {
  const response = await axios.get(`${BACKEND_URL}/api/cars/${slug}`);
  return response.data;
};

const getQueryCars = async (query) => {
  const response = await axios.get(`${BACKEND_URL}/api/query`, {
    params: query,
  });
  return response.data;
};

const carService = {
  getCars,
  getQueryCars,
  getCar,
  getHotCar,
};

export default carService;
