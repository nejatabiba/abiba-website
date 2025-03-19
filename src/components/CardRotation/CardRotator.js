import React, { useState, useEffect } from 'react';
import { Card } from './Card';


export function CardRotator({ cards }) {
    const [previousCard, setPreviousCard] = useState(0);
    const [currentCard, setCurrentCard] = useState(0);
    const [nextCard, setNextCard] = useState(0);
    const [preloadedCards, setPreloadedCards] = useState([]);

    // Preload content for all cards
    useEffect(() => {
        const preloadContent = async () => {
            const loadedCards = await Promise.all(
                cards.map(async (card) => {
                    // Preload the image
                    const image = new Image();
                    image.src = card.image;
    
                    // Fetch the content
                    const response = await fetch(card.content);
                    const text = await response.text();
    
                    return { ...card, content: text, preloadedImage: image };
                })
            );
            setPreloadedCards(loadedCards);
        };
    
        preloadContent();
    }, [cards]);

    const decrementCard = () => {
        setNextCard(currentCard);
        setCurrentCard(previousCard);
        setPreviousCard(((previousCard - 1) % preloadedCards.length) < 0 ? preloadedCards.length - 1 : (previousCard - 1) % preloadedCards.length);
    };

    const advanceCard = () => {
        setPreviousCard(currentCard);
        setCurrentCard(nextCard);
        setNextCard((nextCard + 1) % preloadedCards.length);
    };

    return (
        <div className="cardRotator">
            {preloadedCards.map((card, index) => {
                return <Card  
                    image = {card.image}
                    content={card.content}
                    advanceCard = {advanceCard}
                    decrementCard = {decrementCard}
                    key={index}
                    index={index}
                    currentCard = {currentCard}
                    nextCard = {nextCard}
                    previousCard = {previousCard}
                    />
            })}
            
            
        </div>
    );
}