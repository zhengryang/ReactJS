import React, { useState } from 'react';

const HookCounterTwo = () => {

    const initialCount = 0;

    const [count, setCount] = useState(initialCount)



    return (
        <div>
            {count}
            <button onClick={()=>setCount(initialCount)}>reset</button>
            <button onClick={()=>setCount(count + 1)}>add</button>
            <button onClick={()=>setCount(count -1)}>delete</button>
        </div>
    );
};

export default HookCounterTwo;