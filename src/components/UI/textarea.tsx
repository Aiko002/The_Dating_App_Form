import React from 'react';

interface TextareaProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  [key: string]: any;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  value,
  onChange,
  placeholder,
  className = '',
  ...props
}, ref) => {
  return (
    <textarea
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none ${className}`}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';
