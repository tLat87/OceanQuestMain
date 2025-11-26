import React, { useState } from 'react';
import { OnboardingScreen1 } from '../callocean-screens/OnboardingScreen1';
import { OnboardingScreen2 } from '../callocean-screens/OnboardingScreen2';

interface OnboardingFlowSimpleProps {
  onComplete: () => void;
}

export const OnboardingFlowSimple: React.FC<OnboardingFlowSimpleProps> = ({ onComplete }) => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNext = () => {
    setCurrentScreen(2);
  };

  const handleStart = () => {
    // Просто завершаем онбординг без сохранения в AsyncStorage
    console.log('Onboarding completed (simple version)');
    onComplete();
  };

  if (currentScreen === 1) {
    return <OnboardingScreen1 onNext={handleNext} />;
  }

  return <OnboardingScreen2 onStart={handleStart} />;
};
