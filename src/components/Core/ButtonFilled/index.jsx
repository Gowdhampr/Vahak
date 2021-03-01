import React from 'react'
import styled from 'styled-components';

// Component - Custom hooks
import useWindowDimensions from "../CustomHooks";

const Button = styled.button`
    padding: 10px;
    height: 55px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #3054D6;
    border: 2px solid #E7EBEE;
    color: #FFFFFF;
    font-weight: bold;
    letter-spacing: 0.05em;
    width: 100%;
    border-radius: 6px 6px 6px 6px;
    &:disabled {
        background-color: #EDF0F7;
        color: #2355FC;
        opacity: 0.5;
    }
`;

export const ButtonFilled = ({className, label, disabled}) => {
    const { width } = useWindowDimensions();

    const btnWidth = width ? (width/100) * 90 : "";
    return (
        <div className="d-flex justify-content-center">
            <Button 
                className={className} 
                type="button" 
                disabled={disabled}
                style={{width: btnWidth}}
            >
                {label}
            </Button>
        </div>
    )
}
