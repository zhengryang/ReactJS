import React, {useState} from 'react';

const HookCounter = () => {

    const [count, setCount] = useState(0);

    const HandleSetCount = () => {
        setCount(count + 1)
      }

    return (
        
        <div>
            state hook
            {count}
            <button onClick={HandleSetCount}>count </button>
        </div>
    );
};

export default HookCounter;