import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import ClaimsOptionCard from './components/ClaimsOptionCard';
import defaultOptions from './data/defaultOptions.json';
import { green } from '@mui/material/colors';

function App() {
  const [options, setOptions] = useState(defaultOptions);

  const handleClone = (index) => {
    const clone = {
      ...options[index],
      label: `Option ${options.length + 1}`
    };
    setOptions([...options, clone]);
  };

  const handleDelete = (index) => {
    if (options.length === 1) return;
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleUpdate = (index, updatedData) => {
    const updated = [...options];
    updated[index] = updatedData;
    setOptions(updated);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: 'rgba(246, 253, 249, 1)', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ maxWidth: '100%', padding: 3 }}>
        <Container maxWidth="xl" sx={{backgroundColor:'green',color:'white'}}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Claims Information Panel
          </Typography>
        </Container>

        <Grid container spacing={3}>
          {options.map((option, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <ClaimsOptionCard
                data={option}
                onClone={() => handleClone(idx)}
                onDelete={() => handleDelete(idx)}
                onUpdate={(updated) => handleUpdate(idx, updated)}
                isDeletable={options.length > 1}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default App;