import React, { useContext } from "react"; 
import Post from "../Post/Post";
import { Grid } from "@mui/material"; 

const PostList = ({posts, setPosts, deletePost, editPost}) => { 
 
  return (    
    <Grid container spacing={2}>
      {posts?.map((item, index)  =>(
        <Post key={index} {...item} deletePost={deletePost} editPost={editPost} setPosts={setPosts} />
      ))}      
    </Grid>    
  );
};

export default PostList;