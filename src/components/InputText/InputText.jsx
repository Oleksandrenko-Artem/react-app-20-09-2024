import { useState } from 'react';

const InputText = () => {
    const [valueEnter, setValueEnter] = useState();
    const changeValueEnter = (event) => {
        setValueEnter(event.target.value);
    }
    return (
        <>
            <label>
                enter text:
                <input value={valueEnter} onChange={changeValueEnter}/>
            </label>
        </>
    );
}

export default InputText;
