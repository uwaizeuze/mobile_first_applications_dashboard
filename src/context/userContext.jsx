import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };

  const getUser = async (id) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  };

  const addUser = async (userData) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      userData
    );
    setUsers([...users, response.data]);
  };

  const updateUser = async (id, userData) => {
    await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      userData
    );
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...userData } : user
    );
    setUsers(updatedUsers);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider
      value={{ users, getUsers, getUser, addUser, updateUser, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
