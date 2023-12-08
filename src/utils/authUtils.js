import axios from "axios";

const API_URL = "http://localhost:5005/";

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}auth/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const getUserIdFromAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}auth/verify`);
    return response.data._id;
  } catch (error) {
    console.error("Error getting user ID:", error);
    throw error;
  }
};
