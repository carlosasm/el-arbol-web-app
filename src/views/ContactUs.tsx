import React, { useState } from 'react';
import Typography from '../components/typography/Typography';
import {
  Box,
  TextField,
  Button,
} from '@mui/material';

interface ContactFormState {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
  agreedToTerms: boolean;
}

const ContactForm: React.FC = () => {
  const [state, setState] = useState<ContactFormState>({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    agreedToTerms: false,
  });

  const handleChange = (field: keyof ContactFormState) => (event: any) => {
    setState({ ...state, [field]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  setState({
    ...state,
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
    alert('Still working on this feature!');
  };

  return (
    <Box
    id='contact'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        mr: '10px',
        ml: '10px'
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 10  }}>
            Contáctanos
        </Typography>
        </Box>
        <TextField
          label="Nombre"
          variant="outlined"
          margin="normal"
          fullWidth
          value={state.name}
          onChange={handleChange('name')}
          required
        />
        <TextField
          label="Teléfono"
          variant="outlined"
          margin="normal"
          fullWidth
          value={state.phoneNumber}
          onChange={handleChange('phoneNumber')}
        />
        <TextField
          label="Correo"
          variant="outlined"
          margin="normal"
          fullWidth
          value={state.email}
          onChange={handleChange('email')}
          required
        />
        <TextField
          label="Mensaje"
          variant="outlined"
          multiline
          rows={4}
          margin="normal"
          fullWidth
          value={state.message}
          onChange={handleChange('message')}
          required
        />
        <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Button type="submit" variant="contained" color="success" sx={{ mt: 2, mb: 10 }}>
          Envíar Mensaje
        </Button>
      </Box>
        
      </Box>
    </Box>
  );
};

export default ContactForm;
