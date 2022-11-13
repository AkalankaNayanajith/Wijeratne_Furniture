import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextInput({name}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth id="outlined-basic" label={name} variant="outlined"  />
      
      
    </Box>
  );
}