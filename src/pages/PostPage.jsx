import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import api from "../utils/api";
dayjs.locale('ru')

function PostPage() {
    const [post, setPost] = useState(null);
    const {_id} = useParams();

    useEffect(()=>{
        api.getPost(_id).then((data) => setPost(data))
    },[])

    return (
        <Grid container spacing={2} justifyContent="center">
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
                        <Typography variant="body2" color="text.secondary" noWrap align="left">{post.text} </Typography>
                    </CardContent>
                </Card>
                }
            </Grid>
        </Grid>
    )
}
export default PostPage;