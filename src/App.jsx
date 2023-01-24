import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';
import Footer from './components/Footer/footer';
import Breadcrumb from './components/Breadcrumbs/Breadcrumbs';
import PostPage from "./pages/PostPage";
import NotFounder from './components/NotFounder/NotFounder';
import { Container } from '@mui/system';
import { Box } from '@mui/system'; 
import { Route, Routes } from 'react-router-dom';
import api from './utils/api';  
import { UserContext } from './context/userContext';

function App() { 
  const [users, setUsers] = useState([]); 
  const [posts, setPosts] = useState([]);  

  useEffect(()=>{
    api.getPostList().then((data)=>setPosts(data))
    api.getUserInfo().then((data)=>setUsers(data))
  },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  } 

  const deletePost = (id) => {
    setPosts(posts.filter(item=>item._id !== id))
  } 

  const editPost = (_id, postData) => {    
    const newPosts = posts.map(item => item._id !== _id ? item : postData )
    setPosts(newPosts)
  } 
    
  return (
     <UserContext.Provider value={users}>
       <div className="App">
     <Header />
      <Routes location={window.location}>
        <Route index element={
          <Container>
            <Box className="title-wrap">
              <Breadcrumb create={createPost}/>
            </Box>
            <PostList posts={posts} setPosts={setPosts} deletePost={deletePost} editPost={editPost} />
          </Container>
        }/>

        <Route path='/post/:postId' element={
          <Container>
            <PostPage/>
          </Container>
        }/>

        <Route path='*' element={
          <Container >
              <NotFounder/>
          </Container>
        }/>
      </Routes>
    <Footer/>
  </div>
  </UserContext.Provider>    
  )
}
export default App;
