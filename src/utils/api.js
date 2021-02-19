import axios from "axios";
const BASE_URL = "https://tripinapi.herokuapp.com";
export const userLogin = async (email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(
      `${BASE_URL}/user/login`,
      { email, password },
      config
    );
    if (!Object.keys(data).includes("message")) {
      localStorage.setItem("userLogin", JSON.stringify(data));
    }
    return { data };
  } catch (error) {
    return {
      message:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    };
  }
};

export const userRegister = async (registerData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(
      `${BASE_URL}/user/register`,
      registerData,
      config
    );
    return { data };
  } catch (error) {
    return {
      message:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    };
  }
};

export const createBooking = async (bookingData, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };
  try {
    const { data } = await axios.post(
      `${BASE_URL}/booking/create`,
      bookingData,
      config
    );
    return { data };
  } catch (error) {
    return {
      message:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    };
  }
};

export const getAllBooking = async (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };
  try {
    const { data } = await axios.get(`${BASE_URL}/booking/userbooking`, config);
    return { data };
  } catch (error) {
    return {
      message:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    };
  }
};

export const getAllQueryBooking = async (q, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };
  try {
    const { data } = await axios.get(
      `${BASE_URL}/booking/userbooking?q=${q}`,
      config
    );
    return { data };
  } catch (error) {
    return {
      message:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    };
  }
};
export const updateStatus = async (id, q, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };
  try {
    const { data } = await axios.post(
      `${BASE_URL}/booking/accept`,
      { id, q },
      config
    );
    return { data };
  } catch (error) {
    return {
      message:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    };
  }
};

export const hotelDateFilter = async (token, name, date) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };
  try {
    const { data } = await axios.post(
      `${BASE_URL}/booking/filter`,
      { name, date },
      config
    );
    return { data };
  } catch (error) {
    return {
      message:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    };
  }
};
