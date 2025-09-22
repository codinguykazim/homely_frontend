import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
  Paper,
  Divider,
  InputAdornment,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Google as GoogleIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Handle login logic here
    // For now, redirect to home page on successful login
    navigate('/home');
  };

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 5, 
        maxWidth: 450, 
        mx: 'auto',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}>
          Welcome Back
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Sign in to find your perfect home
        </Typography>
      </Box>

      {/* Tab Navigation */}
      <Box sx={{ display: 'flex', mb: 4, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            borderBottom: '2px solid',
            borderColor: 'primary.main',
            pb: 2,
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
            pb: 2,
            pr: 3,
            transition: 'color 0.3s ease',
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
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 3,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-focused': {
                backgroundColor: 'transparent',
              },
            },
          }}
          required
        />
        
        <TextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                  sx={{ color: 'text.secondary' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 3,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-focused': {
                backgroundColor: 'transparent',
              },
            },
          }}
          required
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="remember" style={{ marginRight: '8px' }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Remember me
            </Typography>
          </Box>
          <Link
            component="button"
            onClick={() => window.location.href = '/forgot-password'}
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Forgot password?
          </Link>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{
            mb: 3,
            py: 1.8,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1.1rem',
            fontWeight: 600,
            background: 'linear-gradient(45deg, #1976d2 30%, #1565c0 90%)',
            boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)',
            '&:hover': {
              background: 'linear-gradient(45deg, #1565c0 30%, #0d47a1 90%)',
              boxShadow: '0 6px 20px rgba(25, 118, 210, 0.4)',
            },
          }}
        >
          Sign In
        </Button>

        <Divider sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', px: 2 }}>
            Or continue with
          </Typography>
        </Divider>

        {/* Social Login */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
          <IconButton
            sx={{
              backgroundColor: '#1877f2',
              color: 'white',
              width: 56,
              height: 56,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#166fe5',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(24, 119, 242, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <FacebookIcon />
          </IconButton>
          
          <IconButton
            sx={{
              backgroundColor: '#db4437',
              color: 'white',
              width: 56,
              height: 56,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#c23321',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(219, 68, 55, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <GoogleIcon />
          </IconButton>
          
          <IconButton
            sx={{
              backgroundColor: '#0077b5',
              color: 'white',
              width: 56,
              height: 56,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#005885',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 119, 181, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          mb: 2,
          minHeight: 24
        }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Don't have an account?{' '}
            <Link
              component="button"
              variant="body2"
              onClick={onSwitchToRegister}
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Register here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginForm;
