import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Header from './Header/Header';
import { Container } from '@mui/system';
import PostList from './PostList/PostList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Container>
          <PostList/>
        </Container>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi</h1>
         <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
