import React from "react"; 
import Post from "../Post/Post";
import { Grid } from "@mui/material";

const PostList = ({posts, deletePost, editPost}) => {  
  return (    
    <Grid container spacing={2}>
      {posts?.map(item =>(
        <Post key={item._id} {...item} deletePost={deletePost} editPost={editPost}   />
      ))}      
    </Grid>    
  );
};

export default PostList;