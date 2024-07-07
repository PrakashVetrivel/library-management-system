import axios from 'axios';

const API_URL = 'https://668a7a522c68eaf3211ce80b.mockapi.io/library-management-system';

export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error; // Re-throw the error to handle it in your component
  }
};

export const addBook = async (book) => {
  try {
    const response = await axios.post(`${API_URL}/books`, book);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

export const updateBook = async (id, book) => {
  try {
    const response = await axios.put(`${API_URL}/books/${id}`, book);
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};

export const getAuthors = async () => {
  try {
    const response = await axios.get(`${API_URL}/authors`);
    return response.data;
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
};

export const addAuthor = async (author) => {
  try {
    const response = await axios.post(`${API_URL}/authors`, author);
    return response.data;
  } catch (error) {
    console.error('Error adding author:', error);
    throw error;
  }
};

export const updateAuthor = async (id, author) => {
  try {
    const response = await axios.put(`${API_URL}/authors/${id}`, author);
    return response.data;
  } catch (error) {
    console.error('Error updating author:', error);
    throw error;
  }
};

export const deleteAuthor = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/authors/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting author:', error);
    throw error;
  }
};
