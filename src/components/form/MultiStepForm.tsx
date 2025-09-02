import React, { useState } from 'react';
import { FormConfig, Screen } from '@/config/formConfig';
import { Card } from '@/components/UI/card';
import { Button } from '@/components/UI/button';
import { Progress } from '@/components/UI/progress';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { QuestionRenderer } from './QuestionRenderer';
import { cn } from '@/lib/utils';

interface FormAnswers {
  [questionId: string]: string | string[];
}

interface MultiStepFormProps {
  config: FormConfig;
  onSubmit: (answers: FormAnswers) => void;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ config, onSubmit }) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [answers, setAnswers] = useState<FormAnswers>({});
  const [errors, setErrors] = useState<{ [questionId: string]: string }>({});

  const currentChapter = config.chapters[currentChapterIndex];
  const currentScreen = currentChapter.screens[currentScreenIndex];
  
  // Calculate total progress
  const totalScreens = config.chapters.reduce((total, chapter) => total + chapter.screens.length, 0);
  const currentScreenNumber = config.chapters
    .slice(0, currentChapterIndex)
    .reduce((total, chapter) => total + chapter.screens.length, 0) + currentScreenIndex + 1;
  const progress = (currentScreenNumber / totalScreens) * 100;

  const validateScreen = (screen: Screen): boolean => {
    const screenErrors: { [questionId: string]: string } = {};
    let isValid = true;

    screen.questions.forEach((question) => {
      const answer = answers[question.id];
      
      if (question.required && (!answer || (Array.isArray(answer) && answer.length === 0))) {
        screenErrors[question.id] = 'This field is required';
        isValid = false;
      } else if (answer && question.validation) {
        const { minLength, maxLength, pattern } = question.validation;
        const answerString = Array.isArray(answer) ? answer.join('') : answer;
        
        if (minLength && answerString.length < minLength) {
          screenErrors[question.id] = `Minimum ${minLength} characters required`;
          isValid = false;
        }
        
        if (maxLength && answerString.length > maxLength) {
          screenErrors[question.id] = `Maximum ${maxLength} characters allowed`;
          isValid = false;
        }
        
        if (pattern && !new RegExp(pattern).test(answerString)) {
          screenErrors[question.id] = 'Please enter a valid format';
          isValid = false;
        }
      }
    });

    setErrors(prev => ({ ...prev, ...screenErrors }));
    return isValid;
  };

  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    // Clear error when user starts typing
    if (errors[questionId]) {
      setErrors(prev => ({ ...prev, [questionId]: '' }));
    }
  };

  const goToNextScreen = () => {
    if (!validateScreen(currentScreen)) return;

    if (currentScreenIndex < currentChapter.screens.length - 1) {
      setCurrentScreenIndex(prev => prev + 1);
    } else if (currentChapterIndex < config.chapters.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
      setCurrentScreenIndex(0);
    }
  };

  const goToPreviousScreen = () => {
    if (currentScreenIndex > 0) {
      setCurrentScreenIndex(prev => prev - 1);
    } else if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
      setCurrentScreenIndex(config.chapters[currentChapterIndex - 1].screens.length - 1);
    }
  };

  const handleSubmit = () => {
    if (validateScreen(currentScreen)) {
      onSubmit(answers);
    }
  };

  const isFirstScreen = currentChapterIndex === 0 && currentScreenIndex === 0;
  const isLastScreen = currentChapterIndex === config.chapters.length - 1 && 
                      currentScreenIndex === currentChapter.screens.length - 1;

  const canContinue = currentScreen.questions.every(question => {
    if (!question.required) return true;
    const answer = answers[question.id];
    return answer && (Array.isArray(answer) ? answer.length > 0 : answer.length > 0);
  });

  return (
    <div className="min-h-screen mobile-gradient mobile-padding">
      <div className="mobile-container">
        {/* Header - Mobile First */}
        <div className="text-center mobile-margin">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Heart className="mobile-icon-lg text-pink-500 mr-2" fill="currentColor" />
            <h1 className="mobile-text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {config.title}
            </h1>
          </div>
          <p className="text-gray-600 mobile-text-xs px-2">{config.subtitle}</p>
        </div>

        {/* Progress Bar - Mobile Optimized */}
        <div className="mobile-margin">
          <div className="flex justify-between mobile-text-xs text-gray-500 mb-2 px-1">
            <span className="mobile-truncate">{currentChapter.title}</span>
            <span className="mobile-nowrap">{currentScreenNumber} of {totalScreens}</span>
          </div>
          <Progress value={progress} className="mobile-progress" />
        </div>

        {/* Form Card - Mobile First */}
        <Card className="mobile-card mobile-shadow border-0 mobile-backdrop mobile-transition hover:shadow-xl">
          <div className="mobile-margin">
            <h2 className="mobile-heading text-gray-800 mb-1 sm:mb-2">
              {currentScreen.title}
            </h2>
            {currentScreen.subtitle && (
              <p className="text-gray-600 mobile-text-xs">
                {currentScreen.subtitle}
              </p>
            )}
          </div>

          <div className="mobile-form-spacing">
            {currentScreen.questions.map((question) => (
              <QuestionRenderer
                key={question.id}
                question={question}
                value={answers[question.id]}
                onChange={(answer) => handleAnswerChange(question.id, answer)}
                error={errors[question.id]}
              />
            ))}
          </div>

          {/* Navigation - Mobile Optimized */}
          <div className="mobile-nav border-t border-gray-200">
            <Button
              variant="outline"
              onClick={goToPreviousScreen}
              disabled={isFirstScreen}
              className="flex items-center mobile-hover mobile-btn"
            >
              <ChevronLeft className="mobile-icon mr-1" />
              Back
            </Button>

            {isLastScreen ? (
              <Button
                onClick={handleSubmit}
                disabled={!canContinue}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white mobile-btn-lg mobile-hover mobile-shadow"
              >
                <Heart className="mobile-icon mr-1 sm:mr-2" fill="currentColor" />
                Complete Profile
              </Button>
            ) : (
              <Button
                onClick={goToNextScreen}
                disabled={!canContinue}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white flex items-center mobile-hover mobile-shadow mobile-btn"
              >
                Continue
                <ChevronRight className="mobile-icon ml-1" />
              </Button>
            )}
          </div>
        </Card>

        {/* Step indicator dots - Mobile Optimized */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
          {currentChapter.screens.map((_, index) => (
            <div
              key={index}
              className={cn(
                "mobile-step-dot rounded-full mobile-transition",
                index === currentScreenIndex
                  ? "bg-pink-500 scale-125"
                  : index < currentScreenIndex
                  ? "bg-pink-400/60"
                  : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
