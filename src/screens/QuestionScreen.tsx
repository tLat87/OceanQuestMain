import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { commonStyles, colors } from '../utils/styles';
import { OceanBackground } from '../components/OceanBackground';
import { GradientButton } from '../components/GradientButton';
import { GradientBackButton } from '../components/GradientBackButton';
import { Question } from '../types';

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  scenarioTitle?: string;
  onSelectAnswer: (optionId: string) => void;
  onBack: () => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  scenarioTitle = 'STORM SURVIVAL',
  onSelectAnswer,
  onBack,
}) => {
  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>{scenarioTitle}</Text>
        <View style={styles.questionCounter}>
          <Text style={styles.counterText}>{questionNumber}/{totalQuestions}</Text>
        </View>
      </View>

      {/* Question content */}
      <View style={styles.content}>
        {/* Question card */}
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{question.text}</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          <GradientButton
            title={question.options[0].text}
            onPress={() => onSelectAnswer(question.options[0].id)}
            style={styles.optionButton}
          />

          <Text style={styles.orText}>or</Text>

          <GradientButton
            title={question.options[1].text}
            onPress={() => onSelectAnswer(question.options[1].id)}
            style={styles.optionButton}
          />
        </View>
      </View>
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    fontFamily: 'CrimsonText-Regular',
  },
  questionCounter: {
    marginLeft: 'auto',
  },
  counterText: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  questionCard: {
    backgroundColor: colors.yellow,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionText: {
    fontSize: 22,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 28,
    fontFamily: 'CrimsonText-Regular',
  },
  optionsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  optionButton: {
    marginVertical: 8,
    minWidth: 280,
  },
  backButton: {
    marginRight: 15,
  },
  orText: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    marginVertical: 15,
    fontFamily: 'CrimsonText-Regular',
  },
});
