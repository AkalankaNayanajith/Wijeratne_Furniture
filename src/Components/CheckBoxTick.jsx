import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBoxTick({Labelinput}) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label={Labelinput} />
    </FormGroup>
  );
}