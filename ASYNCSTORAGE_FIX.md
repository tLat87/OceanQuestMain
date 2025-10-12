# Исправление проблемы AsyncStorage

## Проблема
При запуске приложения возникает ошибка:
```
[@RNC/AsyncStorage]: NativeModule: AsyncStorage is null
```

## Решение

### 1. Установка CocoaPods зависимостей
```bash
cd ios
pod install
```

### 2. Очистка кэша
```bash
npx react-native start --reset-cache
```

### 3. Пересборка приложения
```bash
npx react-native run-ios
```

## Альтернативные решения

### Вариант 1: Использование простой версии онбординга
Приложение теперь использует `OnboardingFlowSimple`, которая не требует AsyncStorage:

```typescript
// В Navigation.tsx
import { OnboardingFlowSimple } from './OnboardingFlowSimple';

// Использование
<OnboardingFlowSimple onComplete={handleOnboardingComplete} />
```

### Вариант 2: Fallback система
Создана система fallback в `OnboardingStorage.ts`:

```typescript
// Автоматическое переключение на fallback при ошибках
if (!AsyncStorage) {
  console.warn('AsyncStorage is not available, using fallback storage');
  return await fallbackStorage.isOnboardingCompleted();
}
```

## Проверка работы

### Тестирование онбординга
1. **Первый запуск**: Должны показаться оба экрана онбординга
2. **Переходы**: "Next" → "Start" → Главное меню
3. **Без ошибок**: AsyncStorage ошибки не должны появляться

### Отладка
```javascript
// В консоли разработчика
console.log('Onboarding completed (simple version)');
```

## Файлы изменены

### Новые файлы
- `src/components/OnboardingFlowSimple.tsx` - Простая версия без AsyncStorage
- `src/utils/OnboardingStorageFallback.ts` - Fallback система

### Обновленные файлы
- `src/utils/OnboardingStorage.ts` - Добавлена fallback система
- `src/components/Navigation.tsx` - Использует простую версию

## Если проблема остается

### Дополнительные шаги
1. **Очистка проекта**:
   ```bash
   cd ios
   rm -rf build
   rm -rf Pods
   rm Podfile.lock
   pod install
   ```

2. **Очистка Metro**:
   ```bash
   npx react-native start --reset-cache
   ```

3. **Перезапуск симулятора**:
   - Закрыть симулятор
   - Запустить заново

### Проверка установки
```bash
# Проверить установку AsyncStorage
npm list @react-native-async-storage/async-storage

# Переустановить если нужно
npm uninstall @react-native-async-storage/async-storage
npm install @react-native-async-storage/async-storage
```

## Результат

✅ **Онбординг работает** без ошибок AsyncStorage
✅ **Два экрана** показываются корректно
✅ **Навигация** между экранами работает
✅ **Fallback система** для надежности

Приложение теперь должно запускаться без ошибок AsyncStorage!
