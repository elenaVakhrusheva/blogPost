//import logo from './logo.svg';

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Container } from '@mui/system';
import PostList from './components/PostList/PostList';
import Footer from './components/Footer/footer';
import Breadcrumb from './components/Breadcrumbs/Breadcrumbs';
import { Box } from '@mui/system';
import api from './utils/api';
import { useEffect, useState } from 'react';
import Like from './components/Like/Like';

 
function App() { 
  const [users, setUsers] = useState([]); 
  const [posts, setPosts] = useState([]);  

  useEffect(()=>{
    api.getPostList().then((data)=>setPosts(data))
  },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  } 
  
  return (    
    <div className="App">
      <Header  user={setUsers} />
      <Container>
        <Box className="title-wrap">
          <Breadcrumb posts={posts} setPosts={setPosts} create={createPost}/>             
        </Box>     
        <PostList posts={posts} /* postLike={handlePostLike} remove={removePost}  */ />  
        <Like/>
      </Container>    
    <Footer/>
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
