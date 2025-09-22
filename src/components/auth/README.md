# Authentication System

A reusable, clean authentication system built with Material-UI and React Router.

## Architecture

### Components Structure

```
src/components/auth/
├── AuthLayout.tsx          # Reusable layout with split design
├── LoginForm.tsx           # Login form component
├── RegisterForm.tsx        # Register form component
└── README.md              # This documentation

src/pages/
├── LoginPage.tsx           # Login page with form switching
└── RegisterPage.tsx        # Register page with form switching
```

## Features

### 🎨 **Design System**

- **Split Layout**: Blue left panel with branding, white right panel with forms
- **Responsive**: Mobile-friendly with responsive breakpoints
- **Material Design**: Consistent with Material-UI design principles
- **Custom Styling**: Rounded inputs, custom colors, hover effects

### 🔧 **Reusable Components**

- **AuthLayout**: Handles the split-screen design and branding
- **LoginForm**: Complete login form with social auth options
- **RegisterForm**: Complete registration form with social auth options
- **Form Switching**: Seamless switching between login/register

### 🚀 **Functionality**

- **Form Validation**: Built-in Material-UI validation
- **Terms Agreement**: Required checkbox for registration
- **Social Login**: Facebook, Google, LinkedIn integration ready
- **State Management**: Local state for form data
- **Navigation**: React Router integration
- **TypeScript**: Full type safety

## Usage

### Basic Implementation

```tsx
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// In your router
<Route path="/login" element={<LoginPage />} />
<Route path="/register" element={<RegisterPage />} />
```

### Custom AuthLayout

```tsx
import AuthLayout from './components/auth/AuthLayout';

<AuthLayout
  title="Your Custom Title"
  subtitle="Your subtitle"
  description="Your description"
>
  <YourCustomForm />
</AuthLayout>
```

### Form Props

```tsx
// LoginForm props
interface LoginFormProps {
  onSwitchToRegister: () => void;
}

// RegisterForm props
interface RegisterFormProps {
  onSwitchToLogin: () => void;
}
```

## Customization

### Theme Colors

Update `src/theme.ts` to customize colors:

```tsx
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Your brand color
    },
    secondary: {
      main: '#dc004e', // Your secondary color
    },
  },
});
```

### AuthLayout Content

Customize the left panel content by passing props:

```tsx
<AuthLayout
  title="Get more things done with Homely platform."
  subtitle="Access to the most powerful tool..."
  description="Your custom description..."
>
```

### Form Fields

Add/remove form fields by modifying the `formData` state and input fields in the form components.

**Register Form Fields:**

- Full Name (required)
- Email Address (required)
- Password (required)
- Terms Agreement (required checkbox)
- Social registration options

## Social Authentication

The forms include social login buttons for:

- **Facebook** (#1877f2)
- **Google** (#db4437)
- **LinkedIn** (#0077b5)

To implement actual social auth, replace the `onClick` handlers with your authentication logic.

## File Organization

### Separation of Concerns

- **Layout**: `AuthLayout.tsx` - Handles the visual structure
- **Forms**: `LoginForm.tsx` & `RegisterForm.tsx` - Handle form logic
- **Pages**: `LoginPage.tsx` & `RegisterPage.tsx` - Handle routing and state
- **Styling**: Inline with Material-UI `sx` prop for component-scoped styles

### Benefits

- ✅ **Reusable**: Components can be used across different pages
- ✅ **Clean**: Each component has a single responsibility
- ✅ **Maintainable**: Easy to update and modify
- ✅ **Scalable**: Easy to add new auth features
- ✅ **Type Safe**: Full TypeScript support

## Next Steps

1. **Form Validation**: Add comprehensive form validation
2. **API Integration**: Connect forms to your backend API
3. **Social Auth**: Implement actual social authentication
4. **Error Handling**: Add error states and messages
5. **Loading States**: Add loading indicators during submission
6. **Password Reset**: Add forgot password functionality
