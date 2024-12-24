import { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log('create effect');
        const idInterval = setInterval(() => {
            // setTime((prevTime) => prevTime + 1);
            setTime(time + 1);
        }, 1000);
        return () => {
            console.log('clear effect');
            clearInterval(idInterval);
        };
    }, [time]);
    return (
        <article>
            <h2>Timer: {time} seconds</h2>
        </article>
    );
}

export default Timer;
