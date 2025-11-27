import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientButton } from '../callocean-components/GradientButton';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { Scenario } from '../callocean-types';

interface ScenarioSelectionScreenProps {
  scenarios: Scenario[];
  onSelectScenario: (scenarioId: string) => void;
  onBack: () => void;
}

export const ScenarioSelectionScreen: React.FC<ScenarioSelectionScreenProps> = ({
  scenarios,
  onSelectScenario,
  onBack,
}) => {
  return (
    <OceanBackground>
      {/* Header */}
      <View style={commonStyles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={commonStyles.headerTitle}>SCENARIO</Text>
      </View>

      {/* Scenarios list */}
      <ScrollView style={styles.scenariosContainer} showsVerticalScrollIndicator={false}>
        {scenarios.map((scenario) => (
          <GradientButton
            key={scenario.id}
            title={scenario.title}
            onPress={() => onSelectScenario(scenario.id)}
            style={styles.scenarioButton}
          />
        ))}
        <View style={styles.characterContainer}>
          <Image
            source={require('../callocean-assets/img/846d80425b8da3bbbd1a55e0f69987bc2474a7e7.png')}
            style={styles.characterImage}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  scenariosContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  characterArea: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginTop: 20,
  },
  characterEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  characterText: {
    fontSize: 22,
    color: colors.yellow,
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'CrimsonText-Regular',
  },
  backButton: {
    marginRight: 15,
  },
  scenarioButton: {
    marginBottom: 15,
    minWidth: 250,
  },
  characterContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  characterImage: {
    width: '70%',
    maxWidth: 380,
    aspectRatio: 0.66,
  },
});
