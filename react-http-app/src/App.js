import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Search from './components/Search';
import SortTable from './components/SortTable';
import UpdateDeleteTable from './components/UpdateDeleteTable';

function App() {
  return (
    <div className="App">
      {/* <PostForm></PostForm> */}
        {/* <PostList/> */}
        {/* <Search></Search> */}
        {/* <SortTable></SortTable> */}
        <UpdateDeleteTable></UpdateDeleteTable>
    </div>
  );
}

export default App;
