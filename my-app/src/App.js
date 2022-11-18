//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Container } from '@mui/system';
import PostList from './PostList/PostList';
import { postData } from "./posts";
import Footer from './Footer/footer';
import Breadcrumb from './Breadcrumbs/Breadcrumbs';
import { Box } from '@mui/system';


function App() {
  return (
    <div className="App">
      <Header/>
        <Container>
          <Box class="title-wrap">
            <Breadcrumb/>             
          </Box>          
          <PostList posts={postData}/>
        </Container>
      <Footer/>
    </div>

   
  );
}

export default App;
