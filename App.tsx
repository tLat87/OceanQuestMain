/**
 * Call of the Ocean - Interactive Story Game
 * Discover the secrets that sleep beneath the waves
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Navigation } from './src/components/Navigation';
import './src/utils/OnboardingDebug'; // Импорт для отладки онбординга

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      <Navigation />
    </>
  );
}

export default App;
