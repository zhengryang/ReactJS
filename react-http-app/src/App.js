import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      {/* <PostForm></PostForm> */}
        {/* <PostList/> */}
        <Search></Search>
    </div>
  );
}

export default App;
