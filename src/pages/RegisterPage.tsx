import React, { useState } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <AuthLayout
      title="Find Your Perfect Home"
      subtitle="Discover amazing rental properties in your area"
      description="Join thousands of satisfied tenants who found their dream home through our platform. Start your journey today!"
    >
      {isLogin ? (
        <LoginForm onSwitchToRegister={handleSwitchToRegister} />
      ) : (
        <RegisterForm onSwitchToLogin={handleSwitchToLogin} />
      )}
    </AuthLayout>
  );
};

export default RegisterPage;
