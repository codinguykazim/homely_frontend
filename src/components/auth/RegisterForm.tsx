import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
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
  Divider,
  InputAdornment,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Google as GoogleIcon,
  LinkedIn as LinkedInIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}


// Validation schema
const validationSchema = yup.object({
  fullName: yup
    .string()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be less than 50 characters')
    .matches(
      /^[a-zA-Z\s]+$/,
      'Full name must contain only letters and spaces'
    ),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a complete email address (e.g., user@domain.com)'
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], 'You must agree to the Terms and Conditions'),
});

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      agreeToTerms: false,
    },
  });

  const agreeToTerms = watch('agreeToTerms');

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: any) => {
    console.log('Register data:', data);
    // Handle registration logic here
    // For now, redirect to home page on successful registration
    navigate('/');
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
          Join Homely
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Create your account to find your perfect home
        </Typography>
      </Box>

      {/* Tab Navigation */}
      <Box sx={{ display: 'flex', mb: 4, borderBottom: '1px solid', borderColor: 'divider' }}>
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
            pb: 2,
            pr: 3,
          }}
        >
          Register
        </Typography>
      </Box>

      {/* Register Form */}
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Full Name"
          {...register('fullName')}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{ color: 'text.secondary' }} />
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
        />
        
        <TextField
          fullWidth
          label="Email Address"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
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
        />
        
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
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
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                {...register('agreeToTerms')}
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
            sx={{ alignItems: 'center' }}
          />
        </Box>
        
        {errors.agreeToTerms && (
          <Typography variant="body2" color="error" sx={{ textAlign: 'center', mb: 2 }}>
            {errors.agreeToTerms.message}
          </Typography>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={!isValid || !agreeToTerms}
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
            '&:disabled': {
              background: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.26)',
              boxShadow: 'none',
            },
          }}
        >
          Create Account
        </Button>

        <Divider sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', px: 2 }}>
            Or continue with
          </Typography>
        </Divider>

        {/* Social Register */}
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

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Already have an account?{' '}
            <Link
              component="button"
              variant="body2"
              onClick={onSwitchToLogin}
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Sign in here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default RegisterForm;
