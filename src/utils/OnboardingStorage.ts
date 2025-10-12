import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = 'call_of_ocean_onboarding_completed';

// Fallback storage для случаев, когда AsyncStorage недоступен
const fallbackStorage = {
  _isCompleted: false,
  
  async isOnboardingCompleted(): Promise<boolean> {
    return this._isCompleted;
  },

  async setOnboardingCompleted(): Promise<void> {
    this._isCompleted = true;
  },

  async resetOnboarding(): Promise<void> {
    this._isCompleted = false;
  },
};

export const OnboardingStorage = {
  // Проверить, завершен ли онбординг
  async isOnboardingCompleted(): Promise<boolean> {
    try {
      // Проверяем, доступен ли AsyncStorage
      if (!AsyncStorage) {
        console.warn('AsyncStorage is not available, using fallback storage');
        return await fallbackStorage.isOnboardingCompleted();
      }
      
      const value = await AsyncStorage.getItem(ONBOARDING_KEY);
      return value === 'true';
    } catch (error) {
      console.error('Error checking onboarding status, using fallback:', error);
      return await fallbackStorage.isOnboardingCompleted();
    }
  },

  // Отметить онбординг как завершенный
  async setOnboardingCompleted(): Promise<void> {
    try {
      if (!AsyncStorage) {
        console.warn('AsyncStorage is not available, using fallback storage');
        return await fallbackStorage.setOnboardingCompleted();
      }
      
      await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
    } catch (error) {
      console.error('Error setting onboarding status, using fallback:', error);
      await fallbackStorage.setOnboardingCompleted();
    }
  },

  // Сбросить статус онбординга (для тестирования)
  async resetOnboarding(): Promise<void> {
    try {
      if (!AsyncStorage) {
        console.warn('AsyncStorage is not available, using fallback storage');
        return await fallbackStorage.resetOnboarding();
      }
      
      await AsyncStorage.removeItem(ONBOARDING_KEY);
    } catch (error) {
      console.error('Error resetting onboarding status, using fallback:', error);
      await fallbackStorage.resetOnboarding();
    }
  },
};
