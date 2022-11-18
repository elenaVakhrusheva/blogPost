import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; 
import { Container } from "@mui/system";
import { Link } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
 
import s from "./style.module.css";


const Footer = () => {
  return (
     <Box className={s.footer} >
      <Container  maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} className={s.footerItem}>
            <Box>Автор проекта: Вахрушева Елена. 2022 ©
            </Box>
          </Grid>
          <Grid item lg={4} className={s.footerItem}>
            <Link href="tel:8-919-902-82-03" underline="none" className={s.link}>8-919-902-82-03</Link>
            <Link href="tg://resolve?domain=@frozelen13"  underline="none" className={s.link} ><TelegramIcon/></Link>
            <Link href="https://api.whatsapp.com/send?phone=89199028203"   underline="none" className={s.link} ><WhatsAppIcon/></Link>
            <Link href="https://github.com/elenaVakhrusheva"  underline="none" className={s.link} ><GitHubIcon/></Link>            
          </Grid>
           <Grid item lg={4} className={s.footerItem}>
            <Link href="mail:elena.vakhrusheva92@yandex.ru"  className={s.link}  >elena.vakhrusheva92@yandex.ru</Link>
          </Grid>
        </Grid>
      </Container>
     </Box>
  );
};

export default Footer;