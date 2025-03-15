import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Header } from './components/header';
import { Main } from './components/Main';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useWindowSize } from 'react-use';

function App() {
  const {width} = useWindowSize();
  const dynamicOffset = width > 768 ? 0.99: 1;

  return (
    <div className="App">
      <Header/> 
      <Parallax pages={3}>
        <Banner />
        <Main />
      </Parallax>
        
    </div>
  );
}

export default App;
