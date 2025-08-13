
import { useState } from "react";
function Field({type, id, label, min, max, readOnly}){
    const [input, setInput] = useState("");
    function onChange(e){
        setInput(e.target.value);
    }

    return (
        <>
            <label htmlFor = {id}>{label}: </label>
            <input
                type = {type}
                id = {id}
                minLength = {min}
                maxLength= {max}
                value = {input}
                onChange = {onChange}
                readOnly = {readOnly}
                required
            />
        </>


    );
}



export{
    Field
}