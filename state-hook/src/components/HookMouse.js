import React, {useState, useEffect} from 'react';

const HookMouse = () => {

    // initialize x & y to zero
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse event')
        setX (e.clientX)
        setY (e.clientY)
    }

    useEffect(()=>{
        console.log('we called useEffect hook')
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    return (
        <div>
            Hooks x -{x}  y- {y}
        </div>
    );
};

export default HookMouse; 