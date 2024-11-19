import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import './App.css';
import Auction from './Components/Auction/Auction';
import GetStarted from './Components/GetStarted/GetStarted';
import Hotest from './Components/HotestSales/Hotest';
import Habit from './Components/Habit/Habit';
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <div className='app'>
       <div className="background-wrapper">
        <Header />
        <Hero />
      </div>
      <Auction />
      <GetStarted />
      <Hotest />
      <Habit />
      <Footer />
    </div>
  );
};

export default App;
