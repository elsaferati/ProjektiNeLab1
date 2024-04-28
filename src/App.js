import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Banner from "./components/Banner";
import List from "./components/List";
import Footer from "./components/Footer";
import Navbar from './navbar';
import Contact from './comp/contact';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Contact />
      <Navbar />
      <Banner />
      <List />
      <Footer />
    </React.Fragment>
  </Router>
  );
}

export default App;
