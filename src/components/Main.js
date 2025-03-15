import React, {useState, useEffect, useRef} from "react";
import { TextContent } from "./TextContent";
import hike_bg from "../data/images/hike_bg.jpg";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export function Main() {
    const ref = useRef(null)

    return(
        <ParallaxLayer offset={0.9999} speed={2} style={{zIndex: 100}}>
            <div className="main bottomShadow">
                This is a text content div
            </div>
        </ParallaxLayer>
        
    )

}