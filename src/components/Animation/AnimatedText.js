import {useSpring, animated} from "@react-spring/web";
import { useEffect } from "react";

export function AnimatedText({ iAmIndex, iAmFont, iAm }) {
    const [animationProps, api] = useSpring( () =>({
        opacity: 1,
        color: "green",
        fontWeight: "bold",
        transform: "translateY(0px)",
        fontFamily: iAmFont[iAmIndex],
        from: { opacity: 0, transform: "translateY(-20px)" },
        config: { tension: 200, friction: 20 },
        reset: true
    }));

    useEffect(() => {
        api.start({
            opacity:1,
            transform: "translateY(0px)",
            fontFamily: iAmFont[iAmIndex],
            reset: true,
        })
    }, [iAmIndex,api])

    return (
        <div className="introHeader">
            <h1>I am</h1>
            <animated.h1 style={animationProps}>{iAm[iAmIndex]}</animated.h1>
        </div>
    )
    
}