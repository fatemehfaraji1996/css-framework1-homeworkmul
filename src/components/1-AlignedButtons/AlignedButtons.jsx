import { Button, TextField, Typography } from "@mui/material";

import Stack from '@mui/material/Stack';


export default function AligendButtons(){

  return(
    <>
    <Typography sx={{alignItems:'center'}} variant="h3" component="h1">
  create your Account
</Typography>


<TextField sx={{p:"0px"}} id="outlined-basic" label="firstName" variant="outlined" />
<TextField id="outlined-basic" label="lastName" variant="outlined" />
<TextField id="outlined-basic" label="age" variant="outlined" />

<TextField id="outlined-basic" label="email" variant="outlined" />
<TextField id="outlined-basic" label="password" variant="outlined" />
    
   
<TextField id="outlined-basic" label="Bio" variant="outlined" />

<Button variant="contained" disableElevation>
  Disable elevation
</Button>


</>
)



}