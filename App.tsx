/**
 * OceanQuest - Treasure Hunt Adventure
 * Embark on an epic quest to find legendary treasures hidden in the depths
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Navigation } from './src/callocean-components/Navigation';
import './src/callocean-utils/OnboardingDebug'; // Импорт для отладки онбординга

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      <Navigation />
    </>
  );
}

export default App;
