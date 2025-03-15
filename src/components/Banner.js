import React, { useState, useEffect } from "react";
import backshot from "../data/images/banner/backshot.jpg";
import backshotME from "../data/images/banner/backshotME.webp";
import hike_bg from "../data/images/hike_bg.jpg";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export function Banner() {

  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={1}>
        <section className="banner">
                <img
                  src={backshot}  
                  className=""
                  alt="Banner"
                />
        </section>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
          <section className="textBanner">
                  {/*<svg width="500" height="500" viewBox="0 0 300 300">
                    <defs>
                      <path id="circlePath" d="M 150,150 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" />
                    </defs>

                    <text >
                      <textPath href="#circlePath" startOffset="0%">
                        Nejat Abiba
                      </textPath>
                    </text>
                  </svg>*/}
                    <img
                          src={backshotME}
                          className="backshotME"
                          alt="Banner">
                    </img>
          </section>
      </ParallaxLayer>
    </Parallax>

    
  );
}
