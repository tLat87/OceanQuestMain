import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientButton } from '../callocean-components/GradientButton';

interface FeedbackScreenProps {
  feedback: string;
  isCorrect: boolean;
  onNext: () => void;
  onBack: () => void;
}

export const FeedbackScreen: React.FC<FeedbackScreenProps> = ({
  feedback,
  isCorrect,
  onNext,
  onBack,
}) => {
  return (
    <OceanBackground>
      {/* Main content */}
      <View style={styles.content}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <View style={styles.goldenFrame}>
            <Text style={styles.gameTitle}>CALL OF THE OCEAN</Text>
          </View>
        </View>

        {/* Feedback message */}
        <View style={styles.feedbackMessage}>
          <Text style={styles.feedbackText}>
            {isCorrect ? 'Excellent choice!' : 'This answer is not true.'}
          </Text>
        </View>

        {/* Character illustration */}
        <View style={styles.characterArea}>
          <Text style={styles.characterEmoji}>👑</Text>
        </View>

        {/* Action button */}
        <View style={styles.buttonContainer}>
          <GradientButton
            title="Next question"
            onPress={onNext}
            style={styles.nextButton}
          />
        </View>
      </View>
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  goldenFrame: {
    borderWidth: 3,
    borderColor: colors.yellow,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
  },
  gameTitle: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  feedbackMessage: {
    alignItems: 'center',
    marginBottom: 30,
  },
  feedbackText: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  characterArea: {
    alignItems: 'center',
    marginVertical: 30,
    flex: 1,
    justifyContent: 'center',
  },
  characterEmoji: {
    fontSize: 120,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  nextButton: {
    minWidth: 150,
  },
});
