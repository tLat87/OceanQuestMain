import React, { useState, useEffect } from 'react';
import { OnboardingScreen1 } from '../callocean-screens/OnboardingScreen1';
import { OnboardingScreen2 } from '../callocean-screens/OnboardingScreen2';
import { OnboardingStorage } from '../callocean-utils/OnboardingStorage';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const isCompleted = await OnboardingStorage.isOnboardingCompleted();
      if (isCompleted) {
        onComplete();
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    setCurrentScreen(2);
  };

  const handleStart = async () => {
    try {
      await OnboardingStorage.setOnboardingCompleted();
      onComplete();
    } catch (error) {
      console.error('Error completing onboarding:', error);
      onComplete(); // Продолжить даже при ошибке
    }
  };

  if (isLoading) {
    return null; // Показываем пустой экран во время загрузки
  }

  if (currentScreen === 1) {
    return <OnboardingScreen1 onNext={handleNext} />;
  }

  return <OnboardingScreen2 onStart={handleStart} />;
};
