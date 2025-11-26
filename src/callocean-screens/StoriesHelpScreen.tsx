import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { commonStyles, colors } from '../callocean-utils/styles';

interface StoriesHelpScreenProps {
  onBack: () => void;
  onGoToStories: () => void;
}

export const StoriesHelpScreen: React.FC<StoriesHelpScreenProps> = ({ onBack, onGoToStories }) => {
  const helpTopics = [
    {
      id: 'light-above-abyss',
      title: '🌊 The Light Above the Abyss',
      description: 'In the heart of endless storms, where waves devour the sun, stands a lone lighthouse — silent, ancient, and unyielding. Sailors say its light isn\'t fueled by flame, but by the spirit of the sea itself.',
    },
    {
      id: 'guardian-of-waves',
      title: '🧜‍♀️ Guardian of the Waves',
      description: 'She was born from the ocean\'s whisper, her hair the color of deep tides, her eyes holding the calm before the storm. Some call her a goddess, others — a memory of love the sea once lost.',
    },
    {
      id: 'path-of-old-turtle',
      title: '🐢 Path of the Old Turtle',
      description: 'Long before ships sailed and kingdoms rose, the Old Turtle swam through the blue abyss, carrying the wisdom of the ages on her shell. She has seen stars fall into the ocean and new worlds rise from the sand.',
    },
    {
      id: 'lord-of-depths',
      title: '⚔️ Lord of the Depths',
      description: 'Once, he was a man — a sailor who defied the storm to save his crew. The ocean claimed him, but instead of drowning, he was reborn beneath its surface. Now he rules the deep as its guardian.',
    },
    {
      id: 'treasure-forgotten-age',
      title: '💰 Treasure of the Forgotten Age',
      description: 'Beneath coral ruins and sleeping shipwrecks rests a chest no diver has ever opened. Time has covered it with salt and secrets, but it hums softly, as if alive.',
    },
    {
      id: 'ghost-of-horizon',
      title: '🚢 Ghost of the Horizon',
      description: 'On misty nights, when the sea turns silver and the horizon disappears, a phantom ship sails silently across the waves. Its crew are shadows, its sails whisper like lost prayers.',
    },
  ];

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>HELP</Text>
      </View>

      {/* Help content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {helpTopics.map((topic) => (
          <TouchableOpacity 
            key={topic.id} 
            style={styles.helpCard}
            onPress={onGoToStories}
          >
            <Text style={styles.helpTitle}>{topic.title}</Text>
            <Text style={styles.helpText}>{topic.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  backButton: {
    marginRight: 15,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  helpCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: colors.yellow,
  },
  helpTitle: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'CrimsonText-Regular',
  },
  helpText: {
    fontSize: 22,
    color: colors.white,
    lineHeight: 28,
    fontFamily: 'CrimsonText-Regular',
  },
});