import React from "react"; 
import Post from "../Post/Post";
import { Grid } from "@mui/material";

const PostForm = () => {
  const [post, setPost] = useState({title:'', body:''})
  const addPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    setPost({title:'', body:''})
  }

  return (    
   <form>
    <Input value={post.title}
    onChange={e =>setPost({...post, title:e.target.value})}
    type="text"
    placeholder="Название поста" />
    <Input value={post.text}
    onChange={e =>setPost({...post, text:e.target.value})}
    type="text"
    placeholder="Название поста" />
    <Button posts={posts} title="Добавить пост"></Button>
  </form>
    
  );
};

export default PostList;