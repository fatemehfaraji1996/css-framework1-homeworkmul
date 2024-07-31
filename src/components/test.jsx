import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 , gap:"0px"}} >
      <Grid container spacing={1}  sx={{ p:'20px' }} >

        <Grid item xs={12} sm={4} md={4} >
         
          <TextField sx={{p:"0px"}} id="outlined-basic" label="firstName" variant="outlined" />
        </Grid>

        <Grid item xs={12}  sm={4} md={4}>
        <TextField id="outlined-basic" label="lastName" variant="outlined" />
        </Grid>
        <Grid item xs={12}  sm={4} md={4}>
        <TextField id="outlined-basic" label="age" variant="outlined" />
        </Grid>
      </Grid>
{/*  */}
<Grid container spacing={1} sx={{ p:'20px' }}>
        <Grid item xs={12}  sm={6} md={6}>  
<TextField id="outlined-basic" label="email" variant="outlined" />
        </Grid>
        <Grid item xs={12}  sm={6} md={6}>
          {/* <Item>pass</Item> */}
          <TextField id="outlined-basic" label="password" variant="outlined" />
        </Grid>
      </Grid>
      {/*  */}
      <Grid container spacing={1} sx={{ p:'20px' }}>
        <Grid item xs={12} sm={12} md={12}>
          {/* <Item>bio</Item> */}
          <TextField id="outlined-basic" label="Bio" variant="outlined" />
        </Grid>
      </Grid>
      {/*  */}
      <Grid container spacing={1} sx={{ p:'20px' }}>
    <Grid item xs={12}  sm={12} md={12}>
      {/* <Item>akhar</Item> */}
      <Button variant="contained" disableElevation>
  Sin Up
</Button>

    </Grid>
  </Grid>
    </Box>

    // 

    
  );
}
