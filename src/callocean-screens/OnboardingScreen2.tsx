import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { commonStyles, colors } from '../callocean-utils/styles';

interface OnboardingScreen2Props {
  onStart: () => void;
}

export const OnboardingScreen2: React.FC<OnboardingScreen2Props> = ({ onStart }) => {
  return (
    <OceanBackground>
      {/* Game Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../callocean-assets/img/39927c36b4a6ef5b42b8c61baa92ba5661f59d35.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Main content */}
      <View style={styles.content}>
        {/* Text content */}
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Your Story</Text>
          <Text style={styles.mainText}>Awaits</Text>
          <Text style={styles.mainText}>Beneath the</Text>
          <Text style={styles.mainText}>Surface</Text>
        </View>

        {/* Character area */}
        <Image
          source={require('../callocean-assets/img/846d80425b8da3bbbd1a55e0f69987bc2474a7e7.png')}
          style={styles.characterImage}
          resizeMode="contain"
        />
      </View>

      {/* Start button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={onStart}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  logoImage: {
    width: '75%',
    maxWidth: 420,
    aspectRatio: 1.5,
  },
  goldenFrame: {
    borderWidth: 3,
    borderColor: colors.golden,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.golden,
    textAlign: 'center',
  },
  logoTextLarge: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.golden,
    textAlign: 'center',
    marginTop: 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.yellow,
    textAlign: 'center',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  characterImage: {
    width: '70%',
    maxWidth: 380,
    aspectRatio: 0.66,
    marginTop: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  startButton: {
    backgroundColor: colors.yellow,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    minWidth: 120,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  startButtonText: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
