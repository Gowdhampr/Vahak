import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import RupeeIcon from "../../../assets/svg/rupeeIcon.svg";

const CurrencyContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    border: none;
    font-size: 45px;
    &:focus {
        outline: none;
    }
`;

const CurrencyField = ({handlePriceChange}) => {
    const [inputLength, setInputLength] = useState(10);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const inputLength = e.target.value.length;
        setInputValue(e.target.value);
        setInputLength(inputLength <= 0 ? 10 : inputLength * 8);
    }
    return (
        <div>
            <CurrencyContainer class="currency">
                <img src={RupeeIcon} alt="" />
                <Input 
                    type="number" 
                    placeholder="0" 
                    pattern= "[0-9]"
                    min="0"
                    onChange={e => {handleChange(e); handlePriceChange(e)}} 
                    value={inputValue} 
                    style={{width: inputLength+'%'}} 
                />
            </CurrencyContainer>
        </div>
    )
}

export default CurrencyField;
