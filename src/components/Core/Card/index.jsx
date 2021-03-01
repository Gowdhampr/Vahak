import React from 'react';

// Component - Custom hooks
import useWindowDimensions from "../CustomHooks";

const Card = ({children, maxWidth, showShadow}) => {
    const { height, width } = useWindowDimensions();

    const cardWidth = maxWidth > width ? maxWidth : (width/100) * 90;
    const cardMargin = (height/100) * 3;

    return (
        <div className={`card ${showShadow ? "shadow" : ""}`}
        style={{width: cardWidth, marginTop: cardMargin, marginBottom: cardMargin}}>
            <div className="cardBody">
                {children}
            </div>
        </div>
    )
}

export default Card