import React, {useState} from "react";

function TextInput(props){
    const [inputType] = useState(props.type) 
    const [label] = useState(props.label)
    const [maxLength] =  useState(props.length)
    const [value, setValue] = useState('')
        
    function handleChange(event){
        setInputValue(event.target.value)
        if(props.onChange) 
            props.onChange(inputValue)
    }

    return(
        <>
            <input 
            type={inputType} 
            value={inputValue} 
            name="input-form"
            onChange={handleChange}
            class="inputclass"
            />
        </>
    )
}



export default TextInput;