import React, { useState } from 'react';

const HookCounterTwo = () => {

    const initialCount = 0;

    const [count, setCount] = useState(initialCount)


    const incrementByFive = () => {
        for(let i = 0; i < 5; i++ ) {
            setCount(prevCount =>prevCount + 1 )
        }
        
    }

    return (
        <div>
            {count}
            <button onClick={()=>setCount(initialCount)}>reset</button>
            <button onClick={()=>setCount(prevCount =>prevCount + 1)}>add</button>
            <button onClick={()=>setCount(prevCount =>prevCount - 1)}>delete</button>
            <button onClick={incrementByFive}>incrementByFive</button>
        </div>
    );
};

export default HookCounterTwo;