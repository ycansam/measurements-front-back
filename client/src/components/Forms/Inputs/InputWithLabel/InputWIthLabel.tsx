import React from "react";
import styles from './InputWithLabel.module.css'
import InputWithLabelProps from "./models/InputWithLabelProps";

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, name, value, type, onChange, required = false }): JSX.Element => {

    return (
        <div className={styles.mainDiv}>
            <label htmlFor={name}>{label}</label>
            <input id={"IL" + name} name={name} value={value} type={type} required={required} onChange={onChange}></input>
        </div>
    )
}
export default InputWithLabel;