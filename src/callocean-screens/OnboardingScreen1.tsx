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
        <Image source={require('../callocean-assets/img/39927c36b4a6ef5b42b8c61baa92ba5661f59d35.png')} style={{width: 300, height: 200, alignSelf: 'center'}} />
        {/* Welcome message */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Welcome to the Deep</Text>
          <Text style={styles.welcomeText}>
            Dive into mysterious underwater worlds, meet mythical guardians, and test your intuition in a series of interactive stories and challenges.
          </Text>
        </View>

        {/* Character illustration */}
        <View style={styles.characterArea}>
        </View>
        <Image source={require('../callocean-assets/img/846d80425b8da3bbbd1a55e0f69987bc2474a7e7.png')} style={{width: 300, height: 450, position: 'absolute', bottom: -100, alignSelf: 'center'}} />
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
    marginVertical: 100,
    paddingVertical: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 15,
  },
  characterEmoji: {
    fontSize: 80,
    marginBottom: 15,
  },
  characterText: {
    fontSize: 16,
    color: colors.yellow,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 20,
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