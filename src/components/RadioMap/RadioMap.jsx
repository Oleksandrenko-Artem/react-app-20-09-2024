import { useState } from "react";
import PropTypes from 'prop-types';

const RadioMap = (props) => {
    const { list, name } = props;
    const [selectUser, setSelectUser] = useState('car');
    const changeSelectUser = (event) => {
        setSelectUser(event.target.value);
    }
    const showRadio = (element) => (
        <label key={element.value} style={{ display: 'block' }}>
            <input
            type="radio"
            name={name}
            value={element.value}
            checked={element.value === selectUser}
            onChange={changeSelectUser} />
            {element.label}
        </label>
    )
    return (
        <>
            {list.map(showRadio)}
            <p>Your choose: {selectUser}</p>
        </>
    );
};

RadioMap.propTypes = {
    list: PropTypes.array,
    name: PropTypes.string,
}

export default RadioMap;
