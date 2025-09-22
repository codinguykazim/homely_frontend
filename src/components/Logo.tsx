import React from 'react';
import { Box, useTheme } from '@mui/material';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  sx?: any;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'auto', 
  size = 'medium',
  sx = {}
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const getSize = () => {
    switch (size) {
      case 'small':
        return { width: 80, height: 80 };
      case 'large':
        return { width: 120, height: 120 };
      case 'extra-large':
        return { width: 150, height: 150 };
      default:
        return { width: 100, height: 100 };
    }
  };

  const getLogoImage = () => {
    if (variant === 'light') return '/logo-light.png';
    if (variant === 'dark') return '/logo-black.png';
    // Auto mode - use theme to determine
    return isDarkMode ? '/logo-black.png' : '/logo-light.png';
  };
  
  const logoImage = getLogoImage();
  const logoSize = getSize();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <img
        src={logoImage}
        alt="Homely Logo"
        style={{
          width: logoSize.width,
          height: logoSize.height,
          objectFit: 'contain',
          borderRadius: '50%',
          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)',
          padding: '8px',
        }}
      />
    </Box>
  );
};

export default Logo;
