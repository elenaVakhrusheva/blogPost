import React from "react";  
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import {MoreVert, Favorite, ExpandMore} from '@mui/icons-material';
import {styled} from "@mui/material/styles";
import { useState } from "react";
import { Grid } from "@mui/material";

import s from "./style.module.css"

import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale('ru')

const ExpandMoreStyled = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
/*   transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }), */
}));

const Post = ({image, title, author={}, text, created_at }) => {
  const {email} = author;
  const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


  return (   

    <Grid item xs={12} sm={6} md={4} >
     <Card className={s.card}>8525
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {email?.slice(0,1).toUpperCase()}
          </Avatar>
        }
        title={email}
        subheader={dayjs(created_at).format('dddd, YYYY-MM-DD')}
      />
       <CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
      />

       <CardContent>
        <Typography variant="h5">{title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>{text}
        </Typography>
      </CardContent>

       <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        
        <ExpandMoreStyled
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </ExpandMoreStyled>
      </CardActions>

       <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {text}
          </Typography>          
        </CardContent>
      </Collapse>
     </Card>
    </Grid> 
  );
};

export default Post;