import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Banner from "./components/Banner";
import List from "./components/List";
import Contact from './comp/contact';
import Footer from "./components/Footer";
import Navbar from './navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Banner></Banner>
      <List></List>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
