import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SendIcon from '@mui/icons-material/Send';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AligendButtons() {
  const [isClicked, setIsClicked] = useState(false);
  // if(!isClicked) setIsClicked(true)
  const handeldesable = () => {
    setIsClicked(true);
  };
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button variant="text" disabled={isClicked} onClick={handeldesable} sx={{ py:'0.5rem',px:'2rem' }}>
          Text
        </Button>

        <Button variant="contained" sx={{ py:'0.5rem',px:'2rem' }} startIcon={ <SendIcon />}>Contained</Button>
        <Button variant="outlined" sx={{ py:'0.5rem',px:'2rem' }} href="https://mui.com/material-ui/customization/breakpoints/">Outlined</Button>
      </Stack>
    </div>
  );
}
