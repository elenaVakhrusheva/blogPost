import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input, TextareaAutosize, TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import { useState } from 'react';



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

export default function ModalForm({postsss, Test}) {
  
 /*  const {posts,b} = {...props} */
  //console.log(postsss,Test)
  
  let qwert='hello'
  let qwert1='hello11'
  
  Test(qwert,qwert1)
  const [titlePost, setTitlePost] = useState('');
  const [bodyPost, setBodyPost]=useState('');
  const bodyInputRef = React.useRef();
  const addPost = (e) =>{
    e.preventDefault();    
      const newPost= {
        titlePost, bodyPost
      }
  // setPosts([...posts], newPost)
   console.log(newPost)
   setTitlePost('')
   setBodyPost('')
  } 

   function addNewPost(e){
    setBodyPost(e.target.value)
    Test(bodyPost)
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
         <Box sx={style}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Добавление поста</FormLabel>
              <FormGroup>
                <Input 
                  placeholder="Название поста" 
                  /* inputProps={ariaLabel} */  
                  fullWidth 
                  margin="dense" 
                  defaultValue={titlePost} 
                  onChange={(e)=>setTitlePost(e.target.value)} 
                  ref={bodyInputRef}/>
                <label htmlFor="raised-button-file">
                  <Button variant="raised" component="span" > Добавить фото </Button>
                </label>
              </FormGroup>
              <FormGroup>
                <Input 
                  fullWidth 
                  margin="dense"
                  placeholder="Описани поста"                  
                  defaultValue={bodyPost} 
                  onChange={(e) => { addNewPost(e) } }
                />
                  <input
                    accept="image/*"             
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                  />
              </FormGroup>
              <Button variant="outlined" onClick={addPost}> Опубликовать </Button>
            </FormControl>
          </Box>
      </Modal>
    </div>
  );
}
 


 