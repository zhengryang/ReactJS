import logo from './logo.svg';
import './App.css';
import ClickCount from './components/ClickCount';
import HoverCount from './components/HoverCount';

function App() {
  return (
    <div className="App">
       <ClickCount></ClickCount>
       <HoverCount></HoverCount>
    </div>
  );
}

export default App;
