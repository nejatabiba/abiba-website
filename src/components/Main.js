import React, {useState, useEffect} from "react";
import {useSpring, animated} from "@react-spring/web";
import { TextContent } from "./TextContent";
import {hike_bg, spn, ist, man} from "../data/images/images";
import {ParallaxLayer } from '@react-spring/parallax'
import {intro, body} from "../textContent/text"
import { AnimatedText } from "./Animation/AnimatedText";
import { CardRotator } from "./CardRotation/CardRotator";
import { computerScience, FTProgramming, IT, science} from "../data/images/images";
import { scienceTxt, FTProgrammingTxt, ITTxt, computerScienceTxt } from "../textContent/text";

export function Main() {

    const iAm = ["a Programmer", "a Student", "a Hiker", "a Gamer", "a Writer", "a Thinker", "a Dreamer", "a Creator", "a Problem Solver", "a Friend", "a Son", "a Brother", "a Human"];
    const iAmFont = ["Courier New, monospace", // Programmer
        "Arial, sans-serif",      // Student
        "Georgia, serif",         // Hiker
        "Verdana, sans-serif",    // Gamer
        "Times New Roman, serif", // Writer
        "Palatino, serif",        // Thinker
        "Comic Sans MS, cursive", // Dreamer
        "Impact, sans-serif",     // Creator
        "Lucida Console, monospace", // Problem Solver
        "Tahoma, sans-serif",     // Friend
        "Helvetica, sans-serif",  // Son
        "Trebuchet MS, sans-serif", // Brother
        "Roboto, sans-serif"  ];
    const [iAmIndex, setIAmIndex] = useState(0);
    const bgImages = [hike_bg, man];
    const [currentImage, setCurrentImage] = useState(hike_bg);
    const [oldImage, setOldImage] = useState(man)
    const [bgIndex, setBgIndex] = useState(0);

    const [educationCards, setEducationCards] = useState([
        {image: science, content: scienceTxt},
        {image: FTProgramming, content: FTProgrammingTxt},
        {image: IT, content: ITTxt},
        {image: computerScience, content: computerScienceTxt}
    ]);

    const [bgAnimationPropsNew, apiNew] = useSpring(() => ({
        from: {opacity: 1, transform: "translate(100%, 30%)"},
        to: {opacity: 1, transform: "translate(0%, 30%)"},
        reset: true,
        config: {
            tension: 2000,
            friction: 200
        }
    }));
    const [bgAnimationPropsOld, apiOld] = useSpring(() => ({
      from: {opacity: 1, transform: "translate(0%, 30%)"},
      to: {opacity: 1, transform: "translate(-100%, 30%)"},
      reset: true,
        config: {
            tension: 2000,
            friction: 200
        }
    }));

    useEffect(() => {  
        const interval = setInterval(() => {
            setIAmIndex( prevIndex => (prevIndex + 1) % iAm.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [iAm]);

    useEffect(() => {
        const interval = setInterval(() => {
            setOldImage(currentImage);
            setBgIndex( prevIndex => (prevIndex + 1) % bgImages.length);
            setCurrentImage(bgImages[bgIndex]);
        }, 5000)

        apiNew.start({
            opacity: 1,
            transform: "translate(0%, 30%)",
            from: {opacity: 1, transform: "translate(100%, 30%)"},
            reset: true,
            config: {
                tension: 2000,
                friction: 200
            }
        })

        apiOld.start({
            opacity: 1,
            transform: "translate(-100%, 30%)",
            from: {opacity: 1, transform: "translate(0%, 30%)"},
            reset: true,
            config: {
                tension: 2000,
                friction: 200
            }
        })

        return () => clearInterval(interval)
    }, [bgIndex, apiNew]);
    

    return(
        <div style={{}}>
            <ParallaxLayer offset={1} speed={0} style={{zIndex:2}}>
                <div className="main bottomShadow topShadow" style={{paddingTop: "10px   "}}>
                    <div className="introHeader">
                    <AnimatedText iAmIndex={iAmIndex} iAm={iAm} iAmFont={iAmFont}/>
                    </div>
                    {<TextContent header={"Welcome!"} content={intro} id={"intro"}></TextContent>}
                </div>
                
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0}
             style={{height: "300vh", backgroundColor: "white"}}>   

                </ParallaxLayer>
            <ParallaxLayer offset={1.1} speed={0.2} style={{zIndex: 0}}>
                <div className="bgImageContainer">
                    <animated.img style={bgAnimationPropsNew} src={currentImage} className="bgImage"/>
                    <animated.img style={bgAnimationPropsOld} src={oldImage} className="bgImage"/>
                </div>
                
            </ParallaxLayer>
            <ParallaxLayer offset={2.2} speed={0} style={{zIndex:2}}>
                <div className="main bottomShadow topShadow" id="education" style={{}}>
                    <TextContent className={"topShadow"} header={""} content={body} id={"body"}></TextContent>
                    <CardRotator cards={educationCards}></CardRotator>
                </div>
                
            </ParallaxLayer>
        </div>
        
    )

}