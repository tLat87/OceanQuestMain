import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { commonStyles, colors } from '../callocean-utils/styles';

interface OnboardingScreen1Props {
  onNext: () => void;
}

export const OnboardingScreen1: React.FC<OnboardingScreen1Props> = ({ onNext }) => {
  return (
    <OceanBackground>
      {/* Main content */}
      <View style={styles.content}>
        {/* Title */}
        <Image
          source={require('../callocean-assets/img/39927c36b4a6ef5b42b8c61baa92ba5661f59d35.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
        {/* Welcome message */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Welcome to the Deep</Text>
          <Text style={styles.welcomeText}>
            Dive into mysterious underwater worlds, meet mythical guardians, and test your intuition in a series of interactive stories and challenges.
          </Text>
        </View>

        {/* Character illustration */}
        <View style={styles.characterArea}>
          <Image
            source={require('../callocean-assets/img/846d80425b8da3bbbd1a55e0f69987bc2474a7e7.png')}
            style={styles.characterImage}
            resizeMode="contain"
          />
        </View>
        {/* Next button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={onNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heroImage: {
    width: '80%',
    maxWidth: 420,
    aspectRatio: 1.5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  welcomeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: colors.yellow,
  },
  welcomeTitle: {
    fontSize: 24,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 16,
    color: colors.white,
    lineHeight: 24,
    textAlign: 'center',
  },
  characterArea: {
    alignItems: 'center',
    marginVertical: 40,
  },
  characterImage: {
    width: '70%',
    maxWidth: 360,
    aspectRatio: 0.66,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  nextButton: {
    backgroundColor: colors.yellow,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    minWidth: 150,
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
  nextButtonText: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});