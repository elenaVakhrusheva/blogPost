import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {Input, TextareaAutosize, TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import { useState } from 'react';
import api from '../../utils/api.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalForm({create}) {

  const [titlePost, setTitlePost] = useState('');
  const [bodyPost, setBodyPost]=useState('');
  const [imgPost, setImgPost]=useState('');
  const bodyInputRef = React.useRef();
 
  const addPost = (e) =>{   
    e.preventDefault();  
      const newPost= {
        title: titlePost, 
        text: bodyPost,
        image: imgPost
      }
   api.addPost(newPost)
      .then((post)=> {
          create(post)
          setTitlePost('')  
          setBodyPost('')  
          setImgPost('')
          setOpen(false)
      })
  } 

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>   
      <Button 
        onClick={handleOpen}         
        size="medium" 
        variant="contained"  
        style={{
          borderRadius: 6,
          backgroundColor: "transparent",
          padding: "10px 20px",
          color: "#000",
          border: "1px solid #000",
          boxShadow: "none"
        }}>Добавить пост</Button>
  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
         <Box sx={style} align="center">
          <FormControl size="medium" component="fieldset" variant="standard">
            <FormLabel component="legend" style={{textAlign:'center', color: '#201f1f', fontWeight: '700', fontSize: '21px', marginBottom: '1em'}}>Добавление поста</FormLabel>
              <FormGroup>
                <Input 
                  placeholder="Название поста" 
                  fullWidth 
                  style={{marginBottom:'0.5em'}} 
                  defaultValue={titlePost} 
                  onChange={(e) => { setTitlePost(e.target.value) }} 
                  ref={bodyInputRef}/>                
              </FormGroup>
              <FormGroup>
                 <TextareaAutosize
                    minRows={3}
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Описание поста"
                    defaultValue={bodyPost} 
                    style={{ width: 300 }}
                    ref={bodyInputRef}
                   onChange={(e) => { setBodyPost(e.target.value) }} 
                  />                
              </FormGroup>
              <FormGroup>
                <TextField placeholder="Ссылка на изображение"
                  fullWidth
                  margin="dense"
                  onChange={(e) => { setImgPost(e.target.value) }}
                  />
              </FormGroup>
              <Button variant="outlined" onClick={addPost}> Опубликовать </Button>
           </FormControl>
          </Box>
      </Modal>  
    </div>    
  );
}
 


 