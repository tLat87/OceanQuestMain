import { OnboardingStorage } from './OnboardingStorage';

// Утилита для отладки онбординга
export const OnboardingDebug = {
  // Сбросить онбординг (показать снова при следующем запуске)
  async resetOnboarding(): Promise<void> {
    try {
      await OnboardingStorage.resetOnboarding();
      console.log('Onboarding reset successfully');
    } catch (error) {
      console.error('Error resetting onboarding:', error);
    }
  },

  // Проверить статус онбординга
  async checkStatus(): Promise<void> {
    try {
      const isCompleted = await OnboardingStorage.isOnboardingCompleted();
      console.log('Onboarding completed:', isCompleted);
    } catch (error) {
      console.error('Error checking onboarding status:', error);
    }
  },

  // Принудительно завершить онбординг
  async completeOnboarding(): Promise<void> {
    try {
      await OnboardingStorage.setOnboardingCompleted();
      console.log('Onboarding marked as completed');
    } catch (error) {
      console.error('Error completing onboarding:', error);
    }
  },
};

// Экспорт для использования в консоли разработчика
if (__DEV__) {
  (global as any).OnboardingDebug = OnboardingDebug;
}
