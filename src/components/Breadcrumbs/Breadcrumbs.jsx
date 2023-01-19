import React from "react"; 
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; 
import { Container } from "@mui/system";
import { Link } from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ModalForm from "../ModalForm/ModalForm";

import s from "./style.module.css";

const Breadcrumb = ({create}) => {
  return (
     <Box className={s.breadcrumb} >
      <Container  maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={12} >
              <Breadcrumbs maxItems={2}  aria-label="breadcrumb" >
                <Link underline="hover" color="inherit" href="#">Главная</Link>
                <Typography color="text.primary">Все посты</Typography>
              </Breadcrumbs>
              <Grid container spacing={2} className="title-container">
              <Grid item lg={8} >
                <h1 variant='h1' align='left' className="h1">Добро пожаловать!</h1>
                <h2 variant='h2' align='left'  className="h2">Можете ознакомиться со списком постов: </h2>
              </Grid>
              <Grid item lg={4} >
                <ModalForm create={create}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
     </Box>
  );
};

export default Breadcrumb;