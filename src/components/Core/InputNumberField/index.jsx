import React, { useState } from 'react'

const InputNumberField = ({className, name, id, label}) => {
    const InputId = id || name;
    const [focus, setFocus] = useState(false);

    const [inputLength, setInputLength] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const inputLength = e.target.value.length;
        setInputValue(e.target.value);
        setInputLength(inputLength <= 0 ? false : true);
    }
    return (
        <div class="wrap">
            <div>
                <label className={focus || inputLength ? "active" : ""}>{label}</label>
                <input
                    className={className}
                    id={InputId}
                    type="text"
                    value={inputValue}
                    onChange={e => handleChange(e)}
                    onFocus={() => setFocus(true)} 
                    onBlur={() => setFocus(false)}
                />
            </div>
        </div>
    )
}

export default InputTextField;