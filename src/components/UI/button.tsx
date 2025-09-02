import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = ''
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl";
  
  const variantClasses = {
    primary: disabled 
      ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
      : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl",
    secondary: disabled
      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300",
    ghost: disabled
      ? "text-gray-400 cursor-not-allowed"
      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100",
    outline: disabled
      ? "border border-gray-200 text-gray-400 cursor-not-allowed bg-white"
      : "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
    icon: "p-0 inline-flex items-center justify-center"
  } as const;

  const iconSizeClasses: Record<'sm' | 'md' | 'lg' | 'icon', string> = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    icon: "w-4 h-4"
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={`${iconSizeClasses[size]} ${children ? 'mr-2' : ''}`} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={`${iconSizeClasses[size]} ${children ? 'ml-2' : ''}`} />
      )}
    </button>
  );
});
Button.displayName = 'Button';

export function buttonVariants(args?: { variant?: 'primary' | 'secondary' | 'ghost' | 'outline'; size?: 'sm' | 'md' | 'lg' | 'icon'; className?: string; disabled?: boolean }) {
  const { variant = 'primary', size = 'md', className = '', disabled = false } = args || {};
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl";
  const variantClasses = {
    primary: disabled 
      ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
      : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl",
    secondary: disabled
      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300",
    ghost: disabled
      ? "text-gray-400 cursor-not-allowed"
      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100",
    outline: disabled
      ? "border border-gray-200 text-gray-400 cursor-not-allowed bg-white"
      : "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
  } as const;
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
    icon: "p-0 inline-flex items-center justify-center"
  } as const;
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
}