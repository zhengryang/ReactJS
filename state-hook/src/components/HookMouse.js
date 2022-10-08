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

    // use this to replace componentDidMount()
    useEffect(()=>{
        console.log('we called useEffect hook')
        window.addEventListener('mousemove', logMousePosition)

        // we remove the calling
        return () => {
            console.log('remove useEffect hook')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks x -{x}  y- {y}
        </div>
    );
};

export default HookMouse; 