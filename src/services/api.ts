import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const weatherApi = {
  getCurrentConditions: async (latitude: number, longitude: number) => {
    const response = await api.get(`/weather/${latitude}/${longitude}`);
    return response.data;
  },
  getForecast: async (latitude: number, longitude: number) => {
    const response = await api.get(`/weather/forecast/${latitude}/${longitude}`);
    return response.data;
  }
};

export const bookingApi = {
  createBooking: async (bookingData: any) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },
  getBooking: async (id: string) => {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  },
  updateBooking: async (id: string, updateData: any) => {
    const response = await api.patch(`/bookings/${id}`, updateData);
    return response.data;
  }
};

export default api;