import React from 'react';
import { Box, Container, Typography, useTheme, Chip } from '@mui/material';
import { 
  LocationOn as LocationIcon,
  Star as StarIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
import Logo from '../Logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  description,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Panel - Blue Background */}
      <Box
        sx={{
          flex: 1,
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: theme.spacing(4),
          position: 'relative',
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            position: 'absolute',
            top: theme.spacing(4),
            left: theme.spacing(4),
          }}
        >
          <Logo variant="light" size="medium" />
        </Box>

        {/* Content */}
        <Box sx={{ textAlign: 'center', maxWidth: 500 }}>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            Find Your Perfect Home
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              mb: 3,
              opacity: 0.9,
            }}
          >
            Discover amazing rental properties in your area
          </Typography>
          
          {/* Feature highlights */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mb: 3 }}>
            <Chip
              icon={<LocationIcon />}
              label="Verified Locations"
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                '& .MuiChip-icon': { color: 'white' }
              }}
            />
            <Chip
              icon={<StarIcon />}
              label="Top Rated"
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                '& .MuiChip-icon': { color: 'white' }
              }}
            />
            <Chip
              icon={<SecurityIcon />}
              label="Secure Booking"
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                '& .MuiChip-icon': { color: 'white' }
              }}
            />
          </Box>
          
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              opacity: 0.8,
              lineHeight: 1.6,
            }}
          >
            Join thousands of satisfied tenants who found their dream home through our platform. 
            Start your journey today!
          </Typography>
        </Box>
      </Box>

      {/* Right Panel - White Background */}
      <Box
        sx={{
          flex: { xs: 1, md: 1.5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: theme.spacing(3),
        }}
      >
        <Container maxWidth="sm">
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default AuthLayout;
