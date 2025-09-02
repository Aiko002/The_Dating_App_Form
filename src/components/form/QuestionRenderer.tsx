import React from 'react';
import { Question } from '@/config/formConfig';
import { Input } from '@/components/UI/input';
import { Textarea } from '@/components/UI/textarea';
import { Label } from '@/components/UI/input';
import { RadioGroup, RadioGroupItem } from '@/components/UI/radio-group';
import { Checkbox } from '@/components/UI/checkbox';
import { cn } from '@/lib/utils';

interface QuestionRendererProps {
  question: Question;
  value?: string | string[];
  onChange: (answer: string | string[]) => void;
  error?: string;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  value,
  onChange,
  error
}) => {
  const handleCheckboxChange = (option: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? value : [];
    if (checked) {
      onChange([...currentValues, option]);
    } else {
      onChange(currentValues.filter(v => v !== option));
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        const isLongText = question.validation?.maxLength && question.validation.maxLength > 100;
        
        if (isLongText) {
          return (
            <Textarea
              placeholder={question.placeholder}
              value={typeof value === 'string' ? value : ''}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
              className={cn(
                "mobile-textarea mobile-focus",
                error && "border-red-500 focus:ring-red-500"
              )}
            />
          );
        }
        
        return (
          <Input
            type="text"
            placeholder={question.placeholder}
            value={typeof value === 'string' ? value : ''}
            onChange={(val: string) => onChange(val)}
            className={cn(
              "mobile-input mobile-focus",
              error && "border-red-500 focus:ring-red-500"
            )}
          />
        );

      case 'radio':
        return (
          <RadioGroup
            value={typeof value === 'string' ? value : ''}
            onValueChange={(val) => onChange(val)}
            className="space-y-3"
          >
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-3">
                <RadioGroupItem
                  value={option}
                  id={`${question.id}-${option}`}
                  className="border-2 border-gray-300 data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
                />
                <Label
                  htmlFor={`${question.id}-${option}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'checkbox':
        const selectedValues = Array.isArray(value) ? value : [];
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-3">
                <Checkbox
                  id={`${question.id}-${option}`}
                  checked={selectedValues.includes(option)}
                  onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                  className="border-2 border-gray-300 data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
                />
                <Label
                  htmlFor={`${question.id}-${option}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mobile-flex-col">
      <div>
        <Label className="mobile-label text-gray-800">
          {question.question}
          {question.required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        {question.placeholder && question.type === 'checkbox' && (
          <p className="mobile-helper text-gray-500 mt-1">{question.placeholder}</p>
        )}
      </div>
      
      {renderInput()}
      
      {error && (
        <p className="mobile-error text-red-500 font-medium">{error}</p>
      )}
      
      {question.validation?.minLength && question.type === 'text' && (
        <p className="mobile-helper text-gray-500">
          {question.validation.maxLength
            ? `${question.validation.minLength}-${question.validation.maxLength} characters`
            : `Minimum ${question.validation.minLength} characters`}
        </p>
      )}
    </div>
  );
};