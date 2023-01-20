import React, {useContext, useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import s from "./style.module.css";
import api from "../../utils/api"; 
import { UserContext } from "../../context/userContext";

const Header = () => {
  const user = useContext(UserContext);
 
  return (
    <Box sx={{ flexGrow: 1 }} className={s.header} >
      <AppBar position="static"   >
        <Container  maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={12}> 
              <Toolbar>
                <SpeakerNotesOutlinedIcon/>
                <Typography variant="h6" component="div" align="left" sx={{ flexGrow: 1 }}>
                  &nbsp;Мои посты
                </Typography>
                 <div>
                  {<span>{user.email}</span> && <span>{user.name}</span>} 
                </div>  
              </Toolbar>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
    
  );
};

export default Header;