import React, { useState } from 'react';
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
  Container,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Badge,
} from '@mui/material';
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  NotificationsActive as NotificationsIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Apartment as ApartmentIcon,
  HomeWork as HomeWorkIcon,
  Map as MapIcon,
  Star as StarIcon,
  ChatBubbleOutline as MessageIcon,
  Person as PersonIcon,
  Dashboard as DashboardIcon,
  PersonOutline as PersonOutlineIcon,
  WbSunny as LightModeIcon,
  Brightness2 as DarkModeIcon,
} from '@mui/icons-material';
import Logo from './Logo';
import { useTheme as useThemeContext } from '../contexts/ThemeContext';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);
  
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

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Beautiful Navbar */}
      <AppBar 
        position="static" 
        sx={{ 
          background: isDarkMode 
            ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
            : 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          boxShadow: isDarkMode 
            ? '0 4px 20px rgba(0, 0, 0, 0.3)'
            : '0 4px 20px rgba(25, 118, 210, 0.3)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 5, position: 'relative', minHeight: 80, alignItems: 'center' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }}>
              <Logo variant="auto" size="small" />
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center', alignItems: 'center', gap: 3 }}>
              <Button 
                color="inherit" 
                startIcon={<DashboardIcon />}
                sx={{ 
                  fontWeight: 600,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                Dashboard
              </Button>
              <Button 
                color="inherit" 
                startIcon={<ApartmentIcon />}
                sx={{ 
                  fontWeight: 600,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                Properties
              </Button>
              <Button 
                color="inherit" 
                startIcon={<MapIcon />}
                sx={{ 
                  fontWeight: 600,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                Explore
              </Button>
              <Button 
                color="inherit" 
                startIcon={<StarIcon />}
                sx={{ 
                  fontWeight: 600,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                Favorites
              </Button>
            </Box>

            {/* Right Side Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1, position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}>
              {/* Theme Toggle */}
              <IconButton 
                color="inherit" 
                onClick={toggleTheme}
                sx={{ 
                  mr: 1,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              {/* Notifications */}
              <IconButton color="inherit" sx={{ mr: 1 }}>
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              {/* Messages */}
              <IconButton color="inherit" sx={{ mr: 1 }}>
                <Badge badgeContent={1} color="error">
                  <MessageIcon />
                </Badge>
              </IconButton>

              {/* User Menu */}
              <IconButton
                onClick={handleUserMenuOpen}
                color="inherit"
                sx={{ 
                  ml: 1,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'rgba(255, 255, 255, 0.2)' }}>
                  <PersonOutlineIcon />
                </Avatar>
              </IconButton>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                onClick={handleMobileMenuToggle}
                sx={{ display: { xs: 'block', md: 'none' }, ml: 1 }}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Toolbar>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <Box sx={{ 
              display: { xs: 'block', md: 'none' }, 
              pb: 2,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, px: 2, pt: 2 }}>
                <Button 
                  color="inherit" 
                  startIcon={<DashboardIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Dashboard
                </Button>
                <Button 
                  color="inherit" 
                  startIcon={<ApartmentIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Properties
                </Button>
                <Button 
                  color="inherit" 
                  startIcon={<MapIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Explore
                </Button>
                <Button 
                  color="inherit" 
                  startIcon={<StarIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Favorites
                </Button>
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Button 
                    variant="outlined" 
                    color="inherit" 
                    onClick={() => navigate('/login')}
                    sx={{ 
                      flex: 1,
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                    }}
                  >
                    Login
                  </Button>
                  <Button 
                    variant="contained" 
                    color="inherit"
                    onClick={() => navigate('/register')}
                    sx={{ 
                      flex: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
                    }}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Container>

        {/* User Menu Dropdown */}
        <Menu
          anchorEl={userMenuAnchor}
          open={Boolean(userMenuAnchor)}
          onClose={handleUserMenuClose}
          sx={{ mt: 1 }}
        >
          <MenuItem onClick={handleUserMenuClose}>
            <PersonIcon sx={{ mr: 1 }} />
            Profile
          </MenuItem>
          <MenuItem onClick={handleUserMenuClose}>
            <SettingsIcon sx={{ mr: 1 }} />
            Settings
          </MenuItem>
          <MenuItem onClick={handleUserMenuClose}>
            <StarIcon sx={{ mr: 1 }} />
            My Favorites
          </MenuItem>
          <MenuItem onClick={handleUserMenuClose}>
            <HomeWorkIcon sx={{ mr: 1 }} />
            My Properties
          </MenuItem>
          <MenuItem onClick={handleUserMenuClose}>
            <MessageIcon sx={{ mr: 1 }} />
            Messages
          </MenuItem>
        </Menu>
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
