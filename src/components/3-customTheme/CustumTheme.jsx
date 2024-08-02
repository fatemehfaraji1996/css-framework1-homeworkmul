import { Box } from "@mui/material";

export default function CustumTheme() {
  return (
    <>
     <div>
      <Box
        height={200}
        width={200}
        my={4}
        alignItems="center"
        p={2}
        sx={{ backgroundColor: "primary.main" }}
      >
        Box 1
      </Box>
      <Box
        height={200}
        width={200}
        my={4}
        alignItems="center"
        p={2}
        sx={{ backgroundColor: "secondary.main" }}
      >
        Box 2
      </Box>
      <Box
        height={200}
        width={200}
        my={4}
        alignItems="center"
        p={2}
        sx={{ backgroundColor: "success.main" }}
      >
        Box 3
      </Box>
    </div>
    </>
   

  );
}
