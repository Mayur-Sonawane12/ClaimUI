import React from 'react';
import { Card, CardContent, Typography, TextField, IconButton, Box,  Radio, RadioGroup, FormControlLabel, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FamilyDefinitionSelector from './FamilyDefinitionSelector';

function ClaimsOptionCard({ data, onClone, onDelete, onUpdate, isDeletable }) {
  const handleChange = (field, value) => {
    onUpdate({ ...data, [field]: value });
  };

  const sumOptions = [100000, 200000, 300000];
  const isCustom = !sumOptions.includes(data.sumInsured);

  return (
    <Card sx={{ mt: 2}}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{backgroundColor:'#4caf50'}}>
          <Typography variant="h6">{data.label}</Typography>
          <Box>
            <IconButton onClick={onClone} sx={{color:'blue'}}><ContentCopyIcon /></IconButton>
            {isDeletable && <IconButton onClick={onDelete} sx={{color:'red'}} ><DeleteIcon /></IconButton>}
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <FamilyDefinitionSelector
          value={data.familyDefinition}
          onChange={(val) => handleChange('familyDefinition', val)}
        />

        <Box display="flex" gap={2} mt={2}>
          <TextField
            label="Employees"
            type="number"
            value={data.employees}
            onChange={(e) => handleChange('employees', +e.target.value)}
            fullWidth
          />
          <TextField
            label="Dependents"
            type="number"
            value={data.dependents}
            onChange={(e) => handleChange('dependents', +e.target.value)}
            fullWidth
          />
        </Box>

        <TextField
          label="Total Lives"
          type="number"
          value={data.employees + data.dependents}
          disabled
          fullWidth
          sx={{ mt: 2 }}
        />

        <Box mt={3}>
          <Typography variant="subtitle1">Sum Insured</Typography>
          <RadioGroup
            row
            value={isCustom ? 'custom' : data.sumInsured}
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'custom') {
                handleChange('sumInsured', '');
              } else {
                handleChange('sumInsured', +val);
              }
            }}
          >
            {sumOptions.map(amount => (
              <FormControlLabel
                key={amount}
                value={amount}
                control={<Radio />}
                label={`₹${amount.toLocaleString()}`}
              />
            ))}
            <FormControlLabel value="custom" control={<Radio />} label="Custom" />
          </RadioGroup>

          <TextField
            label="Custom Amount"
            type="number"
            fullWidth
            disabled={!isCustom}
            value={isCustom ? data.sumInsured : ''}
            onChange={(e) => handleChange('sumInsured', +e.target.value)}
            sx={{ mt: 1 }}
          />
        </Box>

        <TextField
          label="Comments"
          fullWidth
          multiline
          minRows={3}
          value={data.comments}
          onChange={(e) => handleChange('comments', e.target.value)}
          sx={{ mt: 3 }}
        />
      </CardContent>
    </Card>
  );
}

export default ClaimsOptionCard;