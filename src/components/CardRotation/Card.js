import React, {useState} from "react";
import ReactMarkdown from "react-markdown";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { animated } from "@react-spring/web";

export function Card({ image, content, decrementCard, advanceCard, currentCard, nextCard, previousCard, index }) { 
    const [hovering, setHovering] = useState(false);
    
    const onHover = () => {
        setHovering(true);
    };
    const onLeave = () => {
        setHovering(false);
    };

    return (
        <div onMouseEnter={onHover} onMouseLeave={onLeave}
            className={
                "cardOverview " +
                (index === currentCard ? "currentCard " :    
                    index === nextCard ? "nextCard ":
                    index === previousCard ? "previousCard " : "noneCard "
                )
            }
            >
            <SlArrowLeft 
                className="cardArrowLeft cardArrow"
                onClick={decrementCard} 
            />
            <img className="cardImage" src={image} alt="Card" />
            <div className={"cardText " +  (
                    hovering? "cardHovering": "cardNotHovering"
                )}>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <SlArrowRight 
                className="cardArrowRight cardArrow"
                onClick={advanceCard} 
            />
        </div>
    );
}