import { useState } from 'react';

const ToggleText = () => {
    const [close, setClose] = useState(true);
    const changeClose = () => {setClose(!close)}
    return (
        <div>
            <h2>Title <button onClick={changeClose}>{close ? 'hide' : 'open'}</button></h2>
            {close && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae libero quos, nam quae ad molestiae quis facilis asperiores cumque laudantium? Repellat veritatis eaque et non tenetur? Repudiandae, beatae perferendis?</p>}
        </div>
    );
}

export default ToggleText;
