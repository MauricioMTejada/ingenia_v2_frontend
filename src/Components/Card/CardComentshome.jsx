import * as React from 'react';
import Card from '@mui/material/Card';


import Typography from '@mui/material/Typography';
import { Avatar, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';



function CardComentshome({name, lastName, articulo, articulo1, idPublications, title }) {
  return (
    <NavLink to={`/Article/${idPublications}`} style={{ textDecoration: 'none' }} >
      <Card sx={{width:'100%', display:'flex', justifyContent:'left'}}>

        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ padding: "10px", width: "100%" }}
        >
          <Avatar sx={{ bgcolor: "secondary.main"}} style={{ marginInline: "10px"}}> {Array.from(name).shift()} </Avatar>

          <Stack
            style={{ width: "100%", margin: "0px" }}
            >
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", width: "100%"}}>
            <Typography gutterBottom variant="h5" component="div" align='center'>
              {title}
            </Typography>

            <Typography gutterBottom variant="h8" component="div" align='left'>
              Por: {name} {lastName}
            </Typography></div>
          </Stack>

        </Stack>

      </Card>
    </NavLink>
  );
};

export default CardComentshome;