
import './App.css';
import ClickCount from './components/ClickCount';
import HoverCount from './components/HoverCount';
import React  from 'react';
import RenderPropsClickCounter from './components/renderPropsClickCounter';
import RenderPropsHoverCounter from './components/renderPropsHoverCounter';

function App() {
  return (
    <div className="App">
       {/* <ClickCount name="zheng"></ClickCount>
       <HoverCount></HoverCount> */}

       <RenderPropsClickCounter></RenderPropsClickCounter>
       <RenderPropsHoverCounter></RenderPropsHoverCounter>
    </div>
  );
}

export default App;
