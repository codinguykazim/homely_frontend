import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Google as GoogleIcon,
  LinkedIn as LinkedInIcon,
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

  const onSubmit = (data: any) => {
    console.log('Register data:', data);
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
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Full Name"
          {...register('fullName')}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
            },
          }}
        />
        
        <TextField
          fullWidth
          label="E-mail Address"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
            },
          }}
        />
        
        <TextField
          fullWidth
          label="Password"
          type="password"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
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
          <Typography variant="body2" color="error" sx={{ textAlign: 'center', mb: 1 }}>
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
