// Fallback версия без AsyncStorage для случаев, когда AsyncStorage недоступен
export const OnboardingStorageFallback = {
  // Используем простую переменную в памяти
  private _isCompleted: boolean = false;

  // Проверить, завершен ли онбординг
  async isOnboardingCompleted(): Promise<boolean> {
    try {
      // Пытаемся использовать localStorage в веб-среде или просто возвращаем false
      if (typeof window !== 'undefined' && window.localStorage) {
        const value = window.localStorage.getItem('call_of_ocean_onboarding_completed');
        return value === 'true';
      }
      return this._isCompleted;
    } catch (error) {
      console.error('Error checking onboarding status (fallback):', error);
      return this._isCompleted;
    }
  },

  // Отметить онбординг как завершенный
  async setOnboardingCompleted(): Promise<void> {
    try {
      this._isCompleted = true;
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('call_of_ocean_onboarding_completed', 'true');
      }
    } catch (error) {
      console.error('Error setting onboarding status (fallback):', error);
    }
  },

  // Сбросить статус онбординга (для тестирования)
  async resetOnboarding(): Promise<void> {
    try {
      this._isCompleted = false;
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem('call_of_ocean_onboarding_completed');
      }
    } catch (error) {
      console.error('Error resetting onboarding status (fallback):', error);
    }
  },
};
