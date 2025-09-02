import React from "react";
import { Card, CardContent, CardTitle } from "@/components/UI/card";
import { Button } from "@/components/UI/button";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <Card>
          <CardContent className="py-12 text-center">
            <CardTitle className="mb-2">Page not found</CardTitle>
            <p className="text-gray-600 mb-6">The page you are looking for doesn't exist.</p>
            <Button onClick={() => navigate("/")} size="md" variant="primary">
              Go home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;


