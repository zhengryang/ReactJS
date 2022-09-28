import React , {useState, useEffect}from 'react';

const HookCounterOne = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')


    useEffect(()=> {
        console.log('you clicked how many times')
        document.title = `you clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value = {name} onChange={e => setName(e.target.value)}></input>
            <button onClick={()=> setCount(count + 1)}>click {count} times</button>
        </div>
    );
};

export default HookCounterOne;