import React, { useState, useEffect } from "react";
import backshot from "../data/images/banner/backshot.jpg";
import backshotMEHead from "../data/images/banner/backshotMEHead.webp";
import backshotMEBody from "../data/images/banner/backshotMEBody.webp";
import backshotMELegs from "../data/images/banner/backshotMELegs.webp";
import hike_bg from "../data/images/hike_bg.jpg";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export function Banner() {

  return (
    <div>
      <ParallaxLayer offset={0} speed={0.3}>
        <section className="banner">
                <img
                  src={backshot}  
                  className=""
                  alt="Banner"
                />
        </section>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2}>
          <section className="textBanner">
                  {<svg width="600" height="600" viewBox="0 0 300 300">
                    <defs>
                      <path id="circlePath" d="M 150,150 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" />
                    </defs>

                    <text >
                      <textPath href="#circlePath" startOffset="0%">
                        Nejat Abiba
                      </textPath>
                    </text>
                  </svg>}
                  <div className="bodyImages">
                    <img
                            src={backshotMEHead}
                            className="backshotMEHead"
                            alt="Banner">
                      </img>
                      <img
                            src={backshotMEBody}
                            className="backshotMEBody"
                            alt="Banner">
                      </img>
                      <img
                            src={backshotMELegs}
                            className="backshotMELegs"
                            alt="Banner">
                      </img>
                  </div>
                    
          </section>
      </ParallaxLayer>
    </div>

    
  );
}
