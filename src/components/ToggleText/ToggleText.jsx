import { useState } from 'react';
import Icon from '@mdi/react';
import {
    mdiArrowDownDropCircleOutline,
    mdiArrowUpDropCircleOutline
} from '@mdi/js';
import { getRandomColor } from './../../utils/index';

const ToggleText = () => {
    const [color, setColor] = useState('#aaaaaa');
    const [close, setClose] = useState(true);
    const changeClose = () => { setClose(!close) }
    const changeColor = () => {
        setColor(getRandomColor);
    }
    return (
        <div style={{backgroundColor: color}} onClick={changeColor}>
            <h2>Title <span onClick={changeClose}>{close ? <Icon path={mdiArrowUpDropCircleOutline} size={1} color="orange" /> : <Icon path={mdiArrowDownDropCircleOutline} size={1} color="orange" />}</span></h2>
            {close && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae libero quos, nam quae ad molestiae quis facilis asperiores cumque laudantium? Repellat veritatis eaque et non tenetur? Repudiandae, beatae perferendis?</p>}
        </div>
    );
}

export default ToggleText;