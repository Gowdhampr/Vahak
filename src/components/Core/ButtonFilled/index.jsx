import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    background-color: #ffffff;
    border: 2px solid #E7EBEE;
    font-weight: bold;
    letter-spacing: 0.05em;
    width: 100%
    color: #2355FC;
`;

export const ButtonFilled = ({className, label, disabled}) => {
    return (
        <div>
            <Button className={className} type="button" disabled={disabled}>{label}</Button>
        </div>
    )
}
