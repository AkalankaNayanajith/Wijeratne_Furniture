import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput({ name, sx }) {
  return (
    // <Box
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { mt: 2 }
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    <TextField
      fullWidth
      id="outlined-basic"
      label={name}
      variant="outlined"
      sx={{
        ...sx,
        "& .MuiTextField-root": {},
      }}
    />

    // </Box>
  );
}
