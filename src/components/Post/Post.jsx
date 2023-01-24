import React, { useContext } from "react";  
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import {ExpandMore} from '@mui/icons-material';
import {styled} from "@mui/material/styles";
import { useState } from "react";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';
import {Link } from 'react-router-dom';
import PostForm from "../PostForm/PostForm";

import api from '../../utils/api';
import s from "./style.module.css";

import dayjs from "dayjs";
import "dayjs/locale/ru";
import { UserContext } from "../../context/userContext";
dayjs.locale('ru')

const ExpandMoreStyled = styled((props) => {
  const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
    }));

const Post = ({image, name, title, author=[], text, created_at, likes, _id, deletePost, editPost, setPosts }) => {
  const user = useContext(UserContext); 
  const avatar = author.avatar;
  
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => { setExpanded(!expanded)};

  const stateLike = likes?.length;
  const [like, setLike] = useState(stateLike);
  const [isUserClick, setIsUserClick] = useState(false);
  
  const handleClickLike = () => {
    if(!isUserClick) {
      setLike(like+1)
      setIsUserClick(true)
      } else {
      setLike(like-1)
      setIsUserClick(false)
      }
  }

  const onRemoveClick =() => {
    api.deletePost(_id)
    .then(()=>{
      deletePost(_id)
    })
  } 

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false); 
 
  const onEditClick =(post)=> {
      api.editPost(post, _id)
      .then((res) =>{
        editPost(_id, post)
        setOpenEdit(false)
        }) 
  }

  return (   
    <Grid item xs={12} sm={6} md={4} >
     <Card className={s.card}> 
      <CardHeader align="left"      
        avatar={ <Avatar alt={author.name} src={author.avatar} /> }
        title={author.name}
        
        subheader={dayjs(created_at).format('dddd, YYYY-MM-DD')} />
        <Link to={`/post/${_id}`} >
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt={title} />
        </Link>

       <CardContent>
        <Typography variant="h6"  align="left" className={s.titlePost}>{title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap align="left">{text}
        </Typography>
      </CardContent>

       <CardActions disableSpacing>       
        <IconButton aria-label="add to favorites" onClick={handleClickLike}>
          <FavoriteBorderIcon /> 
          <span className={s.likeCount}>{like}</span>
        </IconButton> 
        
        <ExpandMoreStyled
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMore />
        </ExpandMoreStyled>

        <IconButton aria-label="delete" onClick={() => onRemoveClick()}   >
          <DeleteOutlineOutlinedIcon />
        </IconButton>

       <IconButton aria-label="edit" onClick={handleOpenEdit}   >
          <EditIcon />  
          <PostForm 
            titlePost={title} 
            bodyPost={text} 
            imgPost={image} 
            openEdit={openEdit} 
            handleCloseEdit={handleCloseEdit} 
            editPost={onEditClick}/>
        </IconButton>
      </CardActions>


       <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph align='left'>
            {text}
          </Typography>             
        </CardContent>
      </Collapse>
     </Card>
    </Grid> 
  );
};

export default Post;