import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './user.js'; // Import the Users component
import './user.css'; // Import the styles for the Users component
import './App.css';
import logo from './logo.svg';
import Navbar from './navbar.js';
import './navbar.scss';
import Login from './login.js';
import './login.scss';
import Header from './components/Header';
import Banner from "./components/Banner";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  // State to manage user data
  const [users, setUsers] = useState([]);

  // Function to add a new user
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  // Function to delete a user by ID
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <React.Fragment>
      <Navbar />
      <Users users={users} onDelete={deleteUser} /> {/* Pass users and deleteUser function as props */}
      <Login onLogin={addUser} /> {/* Pass addUser function as prop */}
      <Banner></Banner>
      <List></List>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
