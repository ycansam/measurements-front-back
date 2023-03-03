import React from "react";
import styles from './InputWithLabelValueSelector.module.css'
import InputWithLabelValueSelectorProps from "./models/InputsWithLabelValueSelectorProps";
const InputWithLabelValueSelector: React.FC<InputWithLabelValueSelectorProps> = ({ label, name, value, options, onChange, required = false }): JSX.Element => {

    return (
        <div className={styles.mainDiv}>
            <label htmlFor={name}>{label}</label>
            <select name={name} onChange={onChange} value={value} required={required} >
                {
                    options.map((item, index) => {
                        return (<option key={index} value={item}>{item}</option>)
                    })
                }
            </select>
        </div>
    )
}
export default InputWithLabelValueSelector;