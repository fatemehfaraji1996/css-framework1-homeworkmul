import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridTextFields() {
  return (
<>
<Box sx={{textAlign:"center"}}>
<Typography variant='h3'> create your Account </Typography>

</Box>


<Container fixed sx={{alignItems:"center"}}>
    <Box sx={{ flexGrow: 1}} >
      <Grid container spacing={1}  sx={{ p:'20px' }} >

        <Grid item xs={12} sm={4} md={4} >
          <TextField sx={{width:"100%"}}  id="outlined-basic" label="firstName" variant="outlined" />
        </Grid>

        <Grid item  xs={12}  sm={4} md={4}>
        <TextField sx={{width:"100%"}} id="outlined-basic" label="lastName" variant="outlined" />
        </Grid>

        <Grid item xs={12}  sm={4} md={4}>
        <TextField sx={{width:"100%"}} id="outlined-basic" label="age" variant="outlined" />
        </Grid>

      </Grid>
{/*  */}
<Grid container spacing={1} sx={{ p:'20px' }}>
        <Grid item xs={12}  sm={6} md={6}>  
<TextField sx={{width:"100%"}} id="outlined-basic" label="email" variant="outlined" />
        </Grid>
        <Grid item xs={12}  sm={6} md={6}>
          {/* <Item>pass</Item> */}
          <TextField sx={{width:"100%"}} id="outlined-basic" label="password" variant="outlined" />
        </Grid>
      </Grid>
      {/*  */}
      <Grid container spacing={1} sx={{ p:'20px' }}>
        <Grid sx={{width:"200px"}} item xs={12} sm={12} md={12}>
          {/* <Item>bio</Item> */}
          <TextField sx={{width:"100%",height:"10ch"}} id="outlined-multiline-static" label="Bio" variant="outlined" />
        </Grid>
      </Grid>
      {/*  */}
      <Grid container spacing={1} sx={{ p:'20px' }}>
    <Grid item xs={12}  sm={12} md={12}>
      {/* <Item>akhar</Item> */}
      <Button sx={{backgroundColor:"purple",width:"100%"}} variant="contained" disableElevation>
  Sin Up
</Button>

    </Grid>
  </Grid>
    </Box>
   
    </Container>
    </>
    
  );
}
