import React, { useState } from 'react'

const InputTextField = ({className, name, id, label, type, required, pattern}) => {
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
                    type={type || "text"}
                    value={inputValue}
                    onChange={e => handleChange(e)}
                    onFocus={() => setFocus(true)} 
                    onBlur={() => setFocus(false)}
                    required={required}
                    pattern={pattern}
                />
            </div>
        </div>
    )
}

export default InputTextField;