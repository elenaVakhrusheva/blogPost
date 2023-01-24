import React, {useContext, useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom"; 
 
import api from "../utils/api";

import dayjs from "dayjs";
import "dayjs/locale/ru";
import { UserContext } from "../../src/context/userContext";
dayjs.locale('ru');



function PostPage() {
   const [post, setPost] = useState(null);
   const postIdUrL = useParams();
   const user = useContext(UserContext); 
   
   const [open, setOpen] = React.useState(true);
   const handleClick = () => {setOpen(!open);}; 

    useEffect(()=>{
        api.getPost(postIdUrL.postId)
            .then((data) => {setPost(data)})},[])

    

    return (
        <Grid container spacing={2} justifyContent="center" minHeight="100vh">
            <Grid item xs={12} sm={6} >
                {!post ? <></> : <Card> 
                    <CardHeader align="left"
                        avatar={ <Avatar alt={post.author.name} src={post.author.avatar} /> }
                        title={post.author.name}
                        subheader={dayjs(post.created_at).format('dddd, YYYY-MM-DD')} />
                    <CardMedia
                        component="img"
                        height="194"
                        image={post.image}
                        alt={post.title} />
                    <CardContent>
                        <Typography variant="h6"  align="left" >{post.title} </Typography> 
                        <Collapse   in={open} timeout="auto"  unmountOnExit onClick={handleClick} height="100%">
                        <CardContent>
                        <Typography paragraph align='left'>
                           {post.text}
                        </Typography>             
                        </CardContent>
                    </Collapse>
                    </CardContent>
                    
                    
                </Card>
                }
            </Grid>
        </Grid>
    )
}
export default PostPage;