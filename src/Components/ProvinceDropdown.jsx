import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Provinces = [
  {
    value: '',
    label: 'Northern',
  },
  {
    value: 'North Western',
    label: 'North Western',
  },
  {
    value: '',
    label: 'North Central',
  },
  {
    value: '',
    label: 'Eastern',
  },
  {
    value: '',
    label: 'Western',
  },
  {
    value: '',
    label: 'Central',
  },
  {
    value: '',
    label: 'Uva',
  },
  {
    value: '',
    label: 'Sabaragamuwa',
  },
  {
    value: '',
    label: 'Southern',
  },
];

export default function ProvinceDropdown() {
  const [ province, setProvince] = React.useState('Western');

  const handleChange = (event) => {
    setProvince(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width:"100%" ,mt: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        
        <TextField
        fullWidth
          id="outlined-select- province-native"
          select
          label="Province"
          value={ province}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        //   helperText="Please select your province"   ---->   under the box this text will be showed
        >
          { Provinces.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      
    </Box>
  );
}