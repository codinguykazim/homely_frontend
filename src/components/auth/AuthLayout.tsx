import React from 'react';
import {Box, Container, Typography, useTheme, Chip, IconButton, Tooltip} from '@mui/material';
import {
    LocationOnRounded as LocationIcon,
    StarRounded as StarIcon,
    ShieldRounded as SecurityIcon,
    HomeRounded as HomeIcon,
    FavoriteRounded as FavoriteIcon,
    TrendingUpRounded as TrendingIcon,
    ApartmentRounded as ApartmentIcon,
    BusinessRounded as BusinessIcon,
    LocationCityRounded as CityIcon,
    EmojiObjectsRounded as LightbulbIcon,
    AutoAwesomeRounded as SparkleIcon,
    LocalFireDepartmentRounded as FireIcon,
    PsychologyRounded as BrainIcon,
    ExploreRounded as ExploreIcon,
    FlightRounded as FlightIcon,
    DirectionsCarRounded as CarIcon,
    PetsRounded as PetIcon,
    WbSunnyRounded as LightModeIcon,
    Brightness2Rounded as DarkModeIcon
} from '@mui/icons-material';
import Logo from '../Logo';
import { useTheme as useThemeContext } from '../../contexts/ThemeContext';

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
    const { isDarkMode, toggleTheme } = useThemeContext();

    return (
        <Box sx={{display: 'flex', minHeight: '100vh'}}>
            {/* Left Panel - Theme-aware Background */}
            <Box
                sx={{
                    flex: 1,
                    background: isDarkMode 
                        ? 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)' 
                        : 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                    display: {xs: 'none', md: 'flex'},
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: theme.spacing(4),
                    position: 'relative',
                }}
            >
                {/* Floating Background Icons */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '15%',
                        right: '10%',
                        opacity: isDarkMode ? 0.15 : 0.1,
                        animation: 'float 6s ease-in-out infinite',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-20px) rotate(5deg)'},
                        },
                    }}
                >
                    <HomeIcon sx={{fontSize: 60, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '20%',
                        left: '8%',
                        opacity: isDarkMode ? 0.12 : 0.08,
                        animation: 'float 8s ease-in-out infinite reverse',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-20px) rotate(5deg)'},
                        },
                    }}
                >
                    <FavoriteIcon sx={{fontSize: 50, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '60%',
                        right: '5%',
                        opacity: 0.06,
                        animation: 'float 10s ease-in-out infinite',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-20px) rotate(5deg)'},
                        },
                    }}
                >
                    <TrendingIcon sx={{fontSize: 45, color: 'white'}}/>
                </Box>

                {/* Additional Floating Icons */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '25%',
                        left: '5%',
                        opacity: 0.05,
                        animation: 'float 12s ease-in-out infinite reverse',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-15px) rotate(-3deg)'},
                        },
                    }}
                >
                    <ApartmentIcon sx={{fontSize: 40, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '40%',
                        left: '15%',
                        opacity: 0.07,
                        animation: 'float 9s ease-in-out infinite',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-25px) rotate(4deg)'},
                        },
                    }}
                >
                    <CityIcon sx={{fontSize: 35, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '35%',
                        right: '20%',
                        opacity: 0.04,
                        animation: 'float 11s ease-in-out infinite reverse',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-18px) rotate(-2deg)'},
                        },
                    }}
                >
                    <BusinessIcon sx={{fontSize: 42, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '70%',
                        left: '12%',
                        opacity: 0.06,
                        animation: 'float 7s ease-in-out infinite',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-22px) rotate(3deg)'},
                        },
                    }}
                >
                    <LightbulbIcon sx={{fontSize: 38, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '35%',
                        right: '25%',
                        opacity: 0.05,
                        animation: 'float 13s ease-in-out infinite reverse',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-16px) rotate(-4deg)'},
                        },
                    }}
                >
                    <SparkleIcon sx={{fontSize: 32, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '45%',
                        left: '3%',
                        opacity: 0.03,
                        animation: 'float 14s ease-in-out infinite',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-20px) rotate(2deg)'},
                        },
                    }}
                >
                    <FireIcon sx={{fontSize: 36, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '80%',
                        right: '15%',
                        opacity: 0.04,
                        animation: 'float 8.5s ease-in-out infinite reverse',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-19px) rotate(-2deg)'},
                        },
                    }}
                >
                    <BrainIcon sx={{fontSize: 34, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '25%',
                        opacity: 0.05,
                        animation: 'float 9.5s ease-in-out infinite',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-21px) rotate(3deg)'},
                        },
                    }}
                >
                    <ExploreIcon sx={{fontSize: 30, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '60%',
                        right: '8%',
                        opacity: 0.06,
                        animation: 'float 10.5s ease-in-out infinite reverse',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-17px) rotate(-3deg)'},
                        },
                    }}
                >
                    <FlightIcon sx={{fontSize: 28, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '85%',
                        left: '20%',
                        opacity: 0.04,
                        animation: 'float 12.5s ease-in-out infinite',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-14px) rotate(2deg)'},
                        },
                    }}
                >
                    <CarIcon sx={{fontSize: 33, color: 'white'}}/>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '30%',
                        opacity: 0.05,
                        animation: 'float 11.5s ease-in-out infinite reverse',
                        '@keyframes float': {
                            '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                            '50%': {transform: 'translateY(-23px) rotate(-1deg)'},
                        },
                    }}
                >
                    <PetIcon sx={{fontSize: 31, color: 'white'}}/>
                </Box>

                {/* Logo */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: theme.spacing(4),
                        left: theme.spacing(4),
                        zIndex: 2,
                    }}
                >
                    <Logo variant="auto" size="medium"/>
                </Box>

                {/* Content */}
                <Box sx={{textAlign: 'center', maxWidth: 500, position: 'relative', zIndex: 2}}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            mb: 3,
                            lineHeight: 1.2,
                            textShadow: isDarkMode ? '0 2px 4px rgba(0,0,0,0.3)' : 'none',
                        }}
                    >
                        Find Your Perfect Home
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'white',
                            mb: 3,
                            opacity: isDarkMode ? 0.95 : 0.9,
                            textShadow: isDarkMode ? '0 1px 2px rgba(0,0,0,0.2)' : 'none',
                        }}
                    >
                        Discover amazing rental properties in your area
                    </Typography>

                    {/* Feature highlights */}
                    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mb: 3}}>
                        <Chip
                            icon={<LocationIcon/>}
                            label="Trusted Locations"
                            sx={{
                                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.15)',
                                color: 'white',
                                backdropFilter: 'blur(10px)',
                                border: isDarkMode ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.2)',
                                '& .MuiChip-icon': {color: 'white'},
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.25)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: isDarkMode ? '0 4px 12px rgba(0,0,0,0.4)' : '0 4px 12px rgba(0,0,0,0.2)',
                                }
                            }}
                        />
                        <Chip
                            icon={<StarIcon/>}
                            label="Premium Quality"
                            sx={{
                                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.15)',
                                color: 'white',
                                backdropFilter: 'blur(10px)',
                                border: isDarkMode ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.2)',
                                '& .MuiChip-icon': {color: 'white'},
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.25)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: isDarkMode ? '0 4px 12px rgba(0,0,0,0.4)' : '0 4px 12px rgba(0,0,0,0.2)',
                                }
                            }}
                        />
                        <Chip
                            icon={<SecurityIcon/>}
                            label="Secure & Safe"
                            sx={{
                                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.15)',
                                color: 'white',
                                backdropFilter: 'blur(10px)',
                                border: isDarkMode ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.2)',
                                '& .MuiChip-icon': {color: 'white'},
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.25)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: isDarkMode ? '0 4px 12px rgba(0,0,0,0.4)' : '0 4px 12px rgba(0,0,0,0.2)',
                                }
                            }}
                        />
                    </Box>

                    {/* Commission-Free Benefits */}
                    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', mb: 3}}>
                        <Chip
                            label="💸 Zero Commission"
                            sx={{
                                backgroundColor: isDarkMode ? 'rgba(76, 175, 80, 0.3)' : 'rgba(76, 175, 80, 0.2)',
                                color: 'white',
                                border: isDarkMode ? '1px solid rgba(76, 175, 80, 0.4)' : '1px solid rgba(76, 175, 80, 0.3)',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                '&:hover': {
                                    backgroundColor: isDarkMode ? 'rgba(76, 175, 80, 0.4)' : 'rgba(76, 175, 80, 0.3)',
                                    transform: 'translateY(-1px)',
                                }
                            }}
                        />
                        <Chip
                            label="🤝 Direct Connection"
                            sx={{
                                backgroundColor: isDarkMode ? 'rgba(33, 150, 243, 0.3)' : 'rgba(33, 150, 243, 0.2)',
                                color: 'white',
                                border: isDarkMode ? '1px solid rgba(33, 150, 243, 0.4)' : '1px solid rgba(33, 150, 243, 0.3)',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                '&:hover': {
                                    backgroundColor: isDarkMode ? 'rgba(33, 150, 243, 0.4)' : 'rgba(33, 150, 243, 0.3)',
                                    transform: 'translateY(-1px)',
                                }
                            }}
                        />
                        <Chip
                            label="🚫 No Middlemen"
                            sx={{
                                backgroundColor: isDarkMode ? 'rgba(255, 152, 0, 0.3)' : 'rgba(255, 152, 0, 0.2)',
                                color: 'white',
                                border: isDarkMode ? '1px solid rgba(255, 152, 0, 0.4)' : '1px solid rgba(255, 152, 0, 0.3)',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                '&:hover': {
                                    backgroundColor: isDarkMode ? 'rgba(255, 152, 0, 0.4)' : 'rgba(255, 152, 0, 0.3)',
                                    transform: 'translateY(-1px)',
                                }
                            }}
                        />
                    </Box>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'white',
                            opacity: isDarkMode ? 0.9 : 0.8,
                            lineHeight: 1.6,
                            textShadow: isDarkMode ? '0 1px 2px rgba(0,0,0,0.2)' : 'none',
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
                    flex: {xs: 1, md: 1.5},
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isDarkMode ? '#121212' : 'white',
                    padding: theme.spacing(3),
                    position: 'relative',
                }}
            >
                {/* Theme Toggle Button */}
                <Tooltip title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                    <IconButton
                        onClick={toggleTheme}
                        sx={{
                            position: 'absolute',
                            top: theme.spacing(2),
                            right: theme.spacing(2),
                            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                            color: isDarkMode ? 'white' : 'black',
                            '&:hover': {
                                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Tooltip>
                
                <Container maxWidth="sm">
                    {children}
                </Container>
            </Box>
        </Box>
    );
};

export default AuthLayout;
