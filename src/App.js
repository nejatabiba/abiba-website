import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Header } from './components/header';
import { Main } from './components/Main';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useWindowSize } from 'react-use';
import { useSpring } from '@react-spring/core';

function App() {
  const {width} = useWindowSize();
  const dynamicOffset = width > 768 ? 0.99: 1;
  const parallaxRef = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerType, setHeaderType] = useState('header-transparent');

  const fastScroll = useSpring({
     config: {
         tension: 10000,
         friction: 10000,
    }
  }); 

  useEffect(() => {
    const handleScroll = (e) => {
      if((e.target.scrollTop + ((e.target.scrollHeight/5)/7)) >= ((e.target.scrollHeight)/5)){
        console.log('Changing header')
        setHeaderType('opaque-header');
      }else{
        setHeaderType('header-transparent');
      };
    };
  
    // Access the Parallax scrolling container
    const parallaxContainer = parallaxRef.current.container.current;
  
    if (parallaxContainer) {
      parallaxContainer.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener on unmount
      return () => {
        parallaxContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);


  return (
    <div className="App">
      <Header headerScroll = {headerType}/> 
      <Parallax ref={parallaxRef} pages={5}>
        <Banner />
        <Main/>
      </Parallax>
        
    </div>
  );
}

export default App;
