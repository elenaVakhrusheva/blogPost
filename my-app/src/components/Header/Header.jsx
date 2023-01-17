import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
/* import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; */
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import s from "./style.module.css";

const Header = (user) => {
   
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
                  {user.email && <span>{user.email}</span>}
                </div>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
    
  );
};

export default Header;