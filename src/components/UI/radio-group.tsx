import React from 'react';

interface RadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onValueChange,
  className = '',
  children
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            value,
            onValueChange
          });
        }
        return child;
      })}
    </div>
  );
};

interface RadioGroupItemProps {
  value: string;
  id?: string;
  className?: string;
  onValueChange?: (value: string) => void;
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  value,
  id,
  className = '',
  value: groupValue,
  onValueChange
}) => {
  return (
    <input
      type="radio"
      id={id}
      value={value}
      checked={groupValue === value}
      onChange={() => onValueChange?.(value)}
      className={`w-4 h-4 text-pink-600 focus:ring-pink-500 border-2 border-gray-300 ${className}`}
    />
  );
};
