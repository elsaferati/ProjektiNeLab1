import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from "./components/Banner";
import List from "./components/List";
import Footer from "./components/Footer";
import Navbar from './navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Banner></Banner>
      <List></List>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
