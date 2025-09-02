import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';
import { Button } from './UI/button';
import { Card, CardContent } from './UI/card';

interface WelcomePageProps {
  onStart: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardContent className="py-12">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                  <Heart className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to Vido
              </h1>
              
              <p className="text-xl text-gray-600 mb-2">
                Your AI wingman
              </p>
            </div>

            <Button
              onClick={onStart}
              size="lg"
              icon={ChevronRight}
              iconPosition="right"
              className="w-full"
            >
              Let's Find a Match
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};