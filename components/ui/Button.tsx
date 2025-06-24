import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean; // Added disabled prop
}

const Button: React.FC<ButtonProps> = ({
  to,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false, // Destructure disabled prop
}) => {
  const baseStyles = "font-heading font-semibold rounded-lg shadow-md transition-all duration-150 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-surface";
  
  // Adjusted hover styles to not apply when disabled
  const hoverStyles = disabled ? '' : 'hover:scale-105';

  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = `bg-primary text-white ${!disabled ? 'hover:bg-primary-dark' : ''} focus:ring-primary`;
      break;
    case 'secondary':
      variantStyles = `bg-secondary text-white ${!disabled ? 'hover:bg-secondary-light' : ''} focus:ring-secondary`;
      break;
    case 'accent':
      variantStyles = `bg-accent text-white ${!disabled ? 'hover:bg-accent-dark' : ''} focus:ring-accent`;
      break;
    case 'outline':
      variantStyles = `bg-transparent border-2 border-primary text-primary ${!disabled ? 'hover:bg-primary hover:text-white' : ''} focus:ring-primary dark:text-primary-text-dark dark:border-primary-text-dark ${!disabled ? 'dark:hover:bg-primary-text-dark dark:hover:text-dark-bg' : ''}`;
      break;
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-3 py-1.5 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-4 py-2 text-base';
      break;
    case 'lg':
      sizeStyles = 'px-6 py-3 text-lg';
      break;
  }

  // Styles for disabled state
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${hoverStyles} ${disabledStyles} ${className}`;

  if (to && !disabled) { // Link should not be interactive when disabled
    return (
      <Link to={to} className={combinedClassName} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }
  
  if (to && disabled) { // Render as a span or div if 'to' is present but button is disabled
    return (
        <span className={combinedClassName} aria-disabled={disabled}>
            {children}
        </span>
    );
  }


  return (
    <button type={type} onClick={onClick} className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;