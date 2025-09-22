import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
  Paper,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Google as GoogleIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Handle login logic here
  };

  return (
    <Paper elevation={0} sx={{ p: 4, maxWidth: 400, mx: 'auto' }}>
      {/* Tab Navigation */}
      <Box sx={{ display: 'flex', mb: 4 }}>
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
          Login
        </Typography>
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
          onClick={onSwitchToRegister}
        >
          Register
        </Typography>
      </Box>

      {/* Login Form */}
      <Box component="form" onSubmit={handleSubmit}>
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

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{
            mb: 2,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          Login
        </Button>

        <Box sx={{ textAlign: 'right', mb: 3 }}>
          <Link
            href="#"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Forget password?
          </Link>
        </Box>

        {/* Social Login */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 2 }}
          >
            Or login with
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

export default LoginForm;
