import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

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
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <HomeIcon sx={{ color: 'white', fontSize: 32 }} />
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}
          >
            Homely
          </Typography>
        </Box>

        {/* Content */}
        <Box sx={{ textAlign: 'center', maxWidth: 400 }}>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              mb: 2,
              opacity: 0.9,
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              opacity: 0.8,
              lineHeight: 1.6,
            }}
          >
            {description}
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
