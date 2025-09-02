import React, { useState } from "react";
import { WelcomePage } from "@/components/WelcomePage";
import { MultiStepForm } from "@/components/form/MultiStepForm";
import { datingFormConfig } from "@/config/formConfig";
import { FormSuccess } from "@/components/form/FormSuccess";

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => {
    setShowForm(true);
  };

  const handleSubmit = (answers: any) => {
    console.log('Form submitted:', answers);
    setCompleted(true);
  };

  const handleStartOver = () => {
    setShowForm(false);
    setCompleted(false);
  };

  if (completed) {
    return <FormSuccess onStartOver={handleStartOver} />;
  }

  if (showForm) {
    return <MultiStepForm config={datingFormConfig} onSubmit={handleSubmit} />;
  }

  return <WelcomePage onStart={handleStart} />;
};

export default Home;


