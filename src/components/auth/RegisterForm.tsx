import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Paper,
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Google as GoogleIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register data:', formData);
    // Handle registration logic here
  };

  return (
    <Paper elevation={0} sx={{ p: 4, maxWidth: 400, mx: 'auto' }}>
      {/* Tab Navigation */}
      <Box sx={{ display: 'flex', mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            cursor: 'pointer',
            pb: 1,
            pr: 3,
            '&:hover': {
              color: 'primary.main',
            },
          }}
          onClick={onSwitchToLogin}
        >
          Login
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            borderBottom: '2px solid',
            borderColor: 'primary.main',
            pb: 1,
            pr: 3,
          }}
        >
          Register
        </Typography>
      </Box>

      {/* Register Form */}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
            },
          }}
          required
        />
        
        <TextField
          fullWidth
          label="E-mail Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
            },
          }}
          required
        />
        
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
            },
          }}
          required
        />

        <FormControlLabel
          control={
            <Checkbox
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              required
              sx={{
                '&.Mui-checked': {
                  color: 'primary.main',
                },
              }}
            />
          }
          label={
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              I agree to the{' '}
              <Link
                href="#"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Terms and Conditions
              </Link>
            </Typography>
          }
          sx={{ mb: 2, alignItems: 'flex-start' }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={!formData.agreeToTerms}
          sx={{
            mb: 3,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          Register
        </Button>

        {/* Social Register */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 2 }}
          >
            Or register with
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              sx={{
                backgroundColor: '#1877f2',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#166fe5',
                },
                width: 48,
                height: 48,
              }}
            >
              <FacebookIcon />
            </IconButton>
            
            <IconButton
              sx={{
                backgroundColor: '#db4437',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#c23321',
                },
                width: 48,
                height: 48,
              }}
            >
              <GoogleIcon />
            </IconButton>
            
            <IconButton
              sx={{
                backgroundColor: '#0077b5',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#005885',
                },
                width: 48,
                height: 48,
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default RegisterForm;
