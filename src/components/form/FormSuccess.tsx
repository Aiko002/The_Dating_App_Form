import React from 'react';
import { Card } from '@/components/UI/card';
import { Button } from '@/components/UI/button';
import { Heart, Sparkles, Users } from 'lucide-react';

interface FormSuccessProps {
  onStartOver: () => void;
}

export const FormSuccess: React.FC<FormSuccessProps> = ({ onStartOver }) => {
  return (
    <div className="min-h-screen bg-gradient-soft px-4 py-6 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <Card className="p-8 shadow-love border-0 bg-card/95 backdrop-blur-sm">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-love rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-white" fill="currentColor" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-love bg-clip-text text-transparent mb-2">
              Welcome to the community!
            </h2>
            <p className="text-muted-foreground">
              Your profile is now complete and ready to help you find amazing connections.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Profile optimization complete</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span>Ready to discover matches</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              className="w-full bg-gradient-love hover:opacity-90 text-primary-foreground"
              size="lg"
            >
              Start Browsing Matches
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={onStartOver}
            >
              Fill Out Another Profile
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};