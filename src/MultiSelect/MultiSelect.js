import React, { useState } from 'react';
import '../MultiSelect/MultiSelect.css';

export default function MultiSelect({ value, readOnly, placeholder }) {
    const [isopen, setIsOpen] = useState(false)
    const [values, setValues] = useState([value[0], value[1]])
    const handleDropdown = () => {
        setIsOpen(!isopen)
    }
    const handleCheckbox = (e) => {
        if(values.includes(e.target.value)){
            const val = values.filter((item)=>item != e.target.value)
            setValues(val)
        }
        else{
            setValues((prev)=>([...prev, e.target.value]))
        }
    }
    console.log(values);
    return (
        <div>
            <div className='input--box'>
                <input type={"text"} placeholder={placeholder} value={values} readOnly />
                <i className={`arrow ${isopen ? "up" : "down"}`} onClick={handleDropdown}></i>
            </div>
            <div className={isopen ? "dropdown" : "hidden"}>
                {value && value.map((item, index) => {
                    return (
                        <div key={index}>
                            <input type='checkbox' value={item} disabled={readOnly} onChange={handleCheckbox} checked={values.includes(item)} />
                            <label>{item}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
