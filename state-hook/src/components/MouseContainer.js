import React ,{useState}from 'react';
import HookMouse from './HookMouse';

const MouseContainer = () => {

    const [display, setdisplay] = useState(true)

    return (
        <div>
            <button onClick={()=> setdisplay(!display)}>Toggle display</button>
            {display && <HookMouse></HookMouse>}
        </div>
    );
};

export default MouseContainer;