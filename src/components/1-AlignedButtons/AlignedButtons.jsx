import { Button, TextField, Typography } from "@mui/material";

export default function AligendButtons(){
return(
    <>
    <Typography variant="h3" component="h1">
  create your account
</Typography>
<TextField sx={{p:"10px"}} id="outlined-basic" label="firstName" variant="outlined" />
<TextField id="outlined-basic" label="lastName" variant="outlined" />
<TextField id="outlined-basic" label="age" variant="outlined" />

    </>
)
}