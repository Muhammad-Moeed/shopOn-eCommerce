import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from './components/header';
import ImageCarousel from "./components/banner";
import "bootstrap/dist/css/bootstrap.min.css";
import ShapeExample from './components/category';
import './App.css';
import { Flashsale } from "./components/flashsale";
import { categoriesData, products, banners } from "./constants/data";
import Confetti from "react-confetti"; 

const App = () => {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  useEffect(() => {
    setIsConfettiVisible(true);
    setTimeout(() => {
      setIsConfettiVisible(false);
    }, 5000);
  }, []);

  return (
    <>
      {isConfettiVisible && <Confetti />}
      <ResponsiveAppBar />
      <ImageCarousel banners={banners} />
      <ShapeExample categories={categoriesData} />
      <Flashsale cards={products} />
    </>
  );
};

export default App;
