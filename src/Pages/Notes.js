import React from 'react'
import Db from '../Data/Db';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const [data, setData] = useState([]);
  // const [newdata, setNewData] = useState([]);
  console.log(data);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  useEffect(() => {
    setData(Db);
  }, [])

  // const updateuser = (id)=>{
  //   console.log(id);
  //   // const update = data.map(n => n.id !== id);
  //   // console.log(update);
  //   // setData(update);


  // }



 

  return (
    <div>


      <Grid container spacing={2}>
        {
          data.map((note) => (
            <Grid item sm={4} md={4} lg={4} xl={4} key={note.id}>
              <Card >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {note.category[0].toUpperCase()}
                    </Avatar>
                  }
                  action={
                    <Checkbox {...label} />
                    // <Checkbox
                    //   checked={checked}
                    //   onChange={handleChange}
                    //   inputProps={{ 'aria-label': 'controlled' }}
                    // />
                  }
                  title={note.details}
                  subheader={note.category}
                />
                <NavLink to={`/bnotes/${note.id}`}>
                  <CardMedia
                    component="img"
                    height="194"
                    // onClick={navigatee(note.id)}
                    style={{ cursor: 'pointer' }}
                    image={note.url}
                    alt="Paella dish"
                    // onClick={updateuser(note.id)}
                  />
                </NavLink>


              </Card>
            </Grid>
          ))
        }


      </Grid>






    </div>
  )
}

export default Notes