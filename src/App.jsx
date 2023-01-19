import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';
import Footer from './components/Footer/footer';
import Breadcrumb from './components/Breadcrumbs/Breadcrumbs';
import PostPage from "./pages/PostPage";
import { Container } from '@mui/system';
import { Box } from '@mui/system'; 
import { Route, Routes } from 'react-router-dom';
import api from './utils/api'; 


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

  const editPost = (id, postData) => {
    setPosts(posts.map(item => item._id !== id ? item : postData ))
  } 

  

  return (
    <div className="App">
      <Header users={users}  />
      <Routes location={window.location}>
        <Route index element={
          <Container>
            <Box className="title-wrap">
              <Breadcrumb posts={posts} setPosts={setPosts} create={createPost}/>
            </Box>
            <PostList posts={posts} deletePost={deletePost} editPost={editPost}/>
          </Container>
        }/>

        <Route path='/post/:id' element={
          <Container>
            <PostPage/>
          </Container>
        }/>

        <Route path='*' element={
          <Container>
            <h1>404 not found</h1>
          </Container>
        }/>
      </Routes>


    <Footer users={users}/>
  </div>
  )
}
export default App;




/*   const deletePost = (item)=>{
    const data = posts.data.filter(i => i.id !== item.id)
    this.setState({data})     
  }
 
const listItem = posts.state.map((item)=>{
        return <div key={item.id}>
        <span>{item.name}</span> <button onClick={this.delete.bind(this, item)}>Delete</button>
      </div>
    }) */

/*   const removePost = (posts) => {
   /*  setPosts(posts.filter(p=>p._id !== post._id))  
   console.log('DELETE')
  } */


     {/*  <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />        
      </FormControl> */}
