import { Box, Button, FormControl, FormGroup, FormLabel, Input, Modal, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react"; 

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

const PostForm = ({titlePost, bodyPost, imgPost, openEdit, handleCloseEdit, editPost}) => {
  const [post, setPost] = useState({title:'', body:'', image:''})
  const [titleEditPost, setTitleEditPost] = useState(titlePost);
  const [bodyEditPost, setBodyEditPost]=useState(bodyPost);
  const [imgEditPost, setImgEditPost]=useState(imgPost);

 

  return (    
  <div>   
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
         <Box sx={style}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Редактирование поста</FormLabel>
              <FormGroup>
                <Input 
                  placeholder="Название поста" 
                  fullWidth 
                  margin="dense" 
                  defaultValue={titleEditPost} 
                  onChange={(e) => { setTitleEditPost(e.target.value) }}/>                
              </FormGroup>
              <FormGroup>
                 <TextareaAutosize
                    minRows={3}
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Описание поста"
                    defaultValue={bodyEditPost} 
                    style={{ width: 200 }}
                    onChange={(e) => { setBodyEditPost(e.target.value) }} 
                  />                
              </FormGroup>
              <FormGroup>
                <TextField placeholder="Ссылка на изображение"
                  fullWidth
                  margin="dense"
                  onChange={(e) => { setImgEditPost(e.target.value) }}
                  defaultValue={imgEditPost} 
                  />
              </FormGroup>
              <Button variant="outlined" 
                onClick={() => {
                  editPost({title: titleEditPost, text: bodyEditPost, image:imgEditPost});
                  handleCloseEdit(false)
                }}> Опубликовать </Button> 
           </FormControl>
          </Box>
      </Modal>
    </div>
    
  );
};

export default PostForm;