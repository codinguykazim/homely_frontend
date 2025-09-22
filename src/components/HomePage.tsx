import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
} from '@mui/material';
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <HomeIcon sx={{ fontSize: 40 }} />,
      title: 'Smart Home Control',
      description: 'Control all your smart devices from one place',
      color: 'primary' as const,
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Security Monitoring',
      description: 'Keep your home safe with advanced security features',
      color: 'secondary' as const,
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 40 }} />,
      title: 'Automation',
      description: 'Set up custom automation rules for your home',
      color: 'success' as const,
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Energy Efficiency',
      description: 'Monitor and optimize your home\'s energy usage',
      color: 'info' as const,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <HomeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Homely
          </Typography>
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate('/register')}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Welcome to Homely
        </Typography>
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: 3,
        }}
      >
        {features.map((feature, index) => (
          <Card key={index} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Box sx={{ color: `${feature.color}.main`, mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" component="h2" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small" color={feature.color}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Ready to get started?
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ mr: 2 }}
            onClick={() => navigate('/register')}
          >
            Sign Up
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
