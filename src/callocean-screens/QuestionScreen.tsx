import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientButton } from '../callocean-components/GradientButton';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { ScenarioQuestion } from '../callocean-types';

interface QuestionScreenProps {
  question: ScenarioQuestion;
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
          {question.options.map((option, index) => (
            <React.Fragment key={option.id}>
              <GradientButton
                title={option.text}
                onPress={() => onSelectAnswer(option.id)}
                style={styles.optionButton}
              />
              {index < question.options.length - 1 && (
                <Text style={styles.orText}>or</Text>
              )}
            </React.Fragment>
          ))}
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
