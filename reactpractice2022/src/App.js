
import './App.css';
import ClickCount from './components/ClickCount';
import HoverCount from './components/HoverCount';
import React  from 'react';
import RenderPropsClickCounter from './components/renderPropsClickCounter';
import RenderPropsHoverCounter from './components/renderPropsHoverCounter';
import RenderPropsUser from './components/RenderPropsUser';

function App() {
  return (
    <div className="App">
       {/* <ClickCount name="zheng"></ClickCount>
       <HoverCount></HoverCount> */}

       <RenderPropsClickCounter></RenderPropsClickCounter>
       <RenderPropsHoverCounter></RenderPropsHoverCounter>
       <RenderPropsUser nameOfRenderProps = {(isLoggedIn) =>isLoggedIn? 'user_zheng' : 'guest'}></RenderPropsUser>
    </div>
  );
}

export default App;
