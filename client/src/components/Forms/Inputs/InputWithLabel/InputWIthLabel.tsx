import React from "react";

interface InputWithLabelProperties {
    label: string;
    name: string;
    value: string;
    type: "text" | "password";
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: React.FC<InputWithLabelProperties> = ({ label, name, value, type, onChange }) => {

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} value={value} type={type} onChange={onChange}></input>
        </div>
    )
}
export default InputWithLabel;