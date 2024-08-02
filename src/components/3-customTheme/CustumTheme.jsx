import { Box } from "@mui/material";
import React from "react";

export default function CustumTheme() {
  return (
    <>
     <Box
      sx={{
        width: "200px",
        height: "200px",
        bgcolor: 'ActiveCaption',
        border: "2px solid gray",
      }}
    ></Box>
        <Box
      sx={{
        width: "200px",
        height: "200px",
        bgcolor: "pink",
        border: "2px solid gray",
      }}
    ></Box>
        <Box
      sx={{
        width: "200px",
        height: "200px",
        bgcolor: "pink",
        border: "2px solid gray",
      }}
    ></Box>
    </>
   

  );
}
