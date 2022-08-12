
import './App.css';
import ClickCount from './components/ClickCount';
import HoverCount from './components/HoverCount';
import React  from 'react';
import RenderPropsClickCounter from './components/renderPropsClickCounter';
import RenderPropsHoverCounter from './components/renderPropsHoverCounter';
import RenderPropsUser from './components/RenderPropsUser';
import RenderPropsCounter from './components/renderPropsCounter';

function App() {
  return (
    <div className="App">
       {/* <ClickCount name="zheng"></ClickCount>
       <HoverCount></HoverCount> */}

       {/* <RenderPropsClickCounter></RenderPropsClickCounter>
       <RenderPropsHoverCounter></RenderPropsHoverCounter>
       <RenderPropsUser nameOfRenderProps = {(isLoggedIn) =>isLoggedIn? 'user_zheng' : 'guest'}></RenderPropsUser>
        */}
       {/* hover render props */}
       <RenderPropsCounter 
            renderFromCounter = {(count,updateCount ) => (
                  <RenderPropsHoverCounter
                  count = {count} updateCount = {updateCount}
                  ></RenderPropsHoverCounter>
            )}
       ></RenderPropsCounter>
       <RenderPropsCounter 
            renderFromCounter = {(count,updateCount ) => (
                  <RenderPropsClickCounter
                  count = {count} updateCount = {updateCount}
                  ></RenderPropsClickCounter>
            )}
       ></RenderPropsCounter>


       
    </div>
  );
}

export default App;
