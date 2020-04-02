import React from 'react';
import Routes from './Routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => (
  <div className="main-wrapper">
    <div className="container">
      <Header />
      <div className={"body"}>
        <Routes />
      </div>
      <Footer />
    </div>
  </div>
);

export default App;
