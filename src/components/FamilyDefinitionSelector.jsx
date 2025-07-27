import React from 'react';
import { ToggleButton, ToggleButtonGroup, Typography, Box } from '@mui/material';

function FamilyDefinitionSelector({ value, onChange }) {
  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        Family Definition
      </Typography>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(e, val) => val && onChange(val)}
        fullWidth
        color="primary"
      >
        <ToggleButton value="EMP">EMP</ToggleButton>
        <ToggleButton value="ESC">ESC</ToggleButton>
        <ToggleButton value="ESCP/I">ESCP/I</ToggleButton>
        <ToggleButton value="Specify">Specify</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default FamilyDefinitionSelector;