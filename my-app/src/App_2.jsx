//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Container } from '@mui/system';
import PostList from './components/PostList/PostList';
// import { postData } from "./posts";
import Footer from './components/Footer/footer';
import Breadcrumb from './components/Breadcrumbs/Breadcrumbs';
import { Box } from '@mui/system';
import api from './utils/api';
import { useEffect, useState } from 'react';
import Like from './components/Like/Like';
 
 


function App() { 
  /* const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const initialPath = location.state?.initialPath; */

  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState([]); 

  
useEffect(() => {api.getUserInfo().then((data)=> setCurrentUser(data))}, []);
useEffect(() => {api.getPostList().then((data)=> setPosts(data))}, []); 


  return (


function handlePostLike(product) {
 const isLiked = posts.likes.some(id=>id === currentUser._id);
  api.changeLikePost(posts._id, isLiked)
  .then((newCard)=> {
  const newPosts = posts.map(postsState=>{
    return postsState._id === newPosts._id ? newPosts : postsState
  })
  setPosts(newPosts);
 })
}


   <div className="App">
      <Header  user={currentUser}/>
      <Container>
        <Box className="title-wrap">
          <Breadcrumb/>             
        </Box>
        
     {/*  <PostList posts={posts} />  */}
       
       <Like/>
      </Container>
    <Footer/>
    </div>
    );
}

export default App;



/* function handlePostLike(post) {
  const isLiked = post.likes.some(id=>id === currentUser._id);
  api.changeLikePost(post._id, isLiked)
    .then((newCard)=> {
      const newPosts = posts.map(setPosts=> {
        return setPosts._id === newPosts._id ? newCard : setPosts
      })
        setPosts(newCard);
    })
} onPostLike={handlePostLike}*/
