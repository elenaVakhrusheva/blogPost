import React from "react"; 
import { Grid } from "@mui/material";
import s from "./style.module.css";

const NotFounder = () => { 
  return (
    <Grid container spacing={2} justifyContent="center" minHeight="100vh">
      <Grid item xs={12} sm={6} >
        <div className={s.text404} minHeight="100vh">Страница не найдена</div>
      </Grid>
    </Grid>
  )
}

export default NotFounder;