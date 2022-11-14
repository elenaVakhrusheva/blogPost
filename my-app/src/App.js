import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Header from './Header/Header';
import { Container } from '@mui/system';
import PostList from './PostList/PostList';
import { postData } from "./posts";

function App() {
  return (
    <div className="App">
      <Header/>
        <Container>
          <PostList posts={postData}/>
        </Container>
    </div>

   
  );
}

export default App;
