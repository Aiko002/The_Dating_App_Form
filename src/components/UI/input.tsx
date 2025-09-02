import React from 'react';

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  className?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  [key: string]: any; // Allow additional props
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  value,
  onChange,
  placeholder,
  error,
  className = '',
  type = 'text',
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 ${
        error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
      } ${className}`}
      {...props}
    />
  );
});

interface RadioGroupProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  error,
  className = ''
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={(e) => onChange(e.target.value)}
            className="w-4 h-4 text-pink-600 focus:ring-pink-500 border-gray-300"
          />
          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

interface CheckboxGroupProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
  className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  value,
  onChange,
  error,
  className = ''
}) => {
  const handleToggle = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter(v => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={value.includes(option)}
            onChange={() => handleToggle(option)}
            className="w-4 h-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
          />
          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

interface LabelProps {
  children: React.ReactNode;
  required?: boolean;
  className?: string;
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ 
  children, 
  required = false, 
  className = '',
  htmlFor
}) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
      {children}
      {required && <span className="text-pink-500 ml-1">*</span>}
    </label>
  );
};

interface ErrorMessageProps {
  message?: string;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  className = '' 
}) => {
  if (!message) return null;
  
  return (
    <p className={`text-red-500 text-sm mt-1 ${className}`}>
      {message}
    </p>
  );
};