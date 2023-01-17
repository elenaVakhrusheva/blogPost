import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, Input, TextareaAutosize, TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import { useState } from 'react';
import { PhotoCamera, TextFields } from '@mui/icons-material';



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

export default function ModalForm({posts, setPosts, createPost}) {

  const [titlePost, setTitlePost] = useState('');
  const [bodyPost, setBodyPost]=useState('');
  const [imgPost, setImgPost]=useState('');
  const bodyInputRef = React.useRef();
 
  const addPost = (e) =>{  // создаем новый объект
    e.preventDefault();    // предотвращаем перезагрузку
      const newPost= {
        id:Date.now(), titlePost, bodyPost, imgPost
      }
    console.log(newPost)
    createPost(newPost) 
    setPosts([...posts], newPost) // передаем массив постов и новый пост
   
    setTitlePost('') //очищаем после отработки useState
    setBodyPost('') //очищаем после  отработки useState
    setImgPost('')
  } 

/*    function addNewPost(e){
    setBodyPost(e.target.value)
    setTitlePost(e.target.value)
    //Test(bodyPost)
  } */

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
         <Box sx={style}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Добавление поста</FormLabel>
              <FormGroup>
                <Input 
                  placeholder="Название поста" 
                  fullWidth 
                  margin="dense" 
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
                    style={{ width: 200 }}
                    ref={bodyInputRef}
                   onChange={(e) => { setBodyPost(e.target.value) }} 
                  />

                {/* <Input 
                  fullWidth 
                  margin="dense"
                  placeholder="Описание поста"                  
                  defaultValue={bodyPost} 
                  onChange={(e) => { setTitlePost(e.target.value) }}
                  ref={bodyInputRef}
                  multiple/>  */}                  
              </FormGroup>
              <FormGroup>
                <Button variant="contained" component="label">
                  Upload  <PhotoCamera />
                  <input 
                    hidden 
                    accept="image/*" 
                    multiple 
                    type="file" 
                    onChange={(e) => { setImgPost(e.target.value) }}
                    ref={bodyInputRef}/>
                </Button>
              </FormGroup>
              <Button variant="outlined" onClick={addPost}> Опубликовать </Button>
           </FormControl>
          </Box>
      </Modal>
    </div>
  );
}
 


 