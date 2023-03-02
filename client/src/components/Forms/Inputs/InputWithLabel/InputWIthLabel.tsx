import React from "react";

interface InputWithLabelProperties {
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: React.FC<InputWithLabelProperties> = ({ label, name, value, onChange }) => {

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} value={value} onChange={onChange}></input>
        </div>
    )
}
export default InputWithLabel;