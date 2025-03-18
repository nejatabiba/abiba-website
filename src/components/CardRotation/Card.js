import React from "react";
import ReactMarkdown from "react-markdown";

export function Card({ image, content }) {
    return (
        <div className="cardOverview">
            <img className="cardImage" src={image} alt="Card" />
            <div className="cardText">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
}