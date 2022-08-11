
import './App.css';
import ClickCount from './components/ClickCount';
import HoverCount from './components/HoverCount';
import React  from 'react';

function App() {
  return (
    <div className="App">
       <ClickCount></ClickCount>
       <HoverCount></HoverCount>
    </div>
  );
}

export default App;
