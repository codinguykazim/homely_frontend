import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';

const ForgotPasswordPage: React.FC = () => {
    return (
        <AuthLayout
            title="Reset Your Password"
            subtitle="Don't worry, it happens to the best of us"
            description="Enter your email address and we'll send you a link to reset your password. You'll be back to finding your perfect home in no time!"
        >
            <ForgotPasswordForm/>
        </AuthLayout>
    );
};

export default ForgotPasswordPage;
