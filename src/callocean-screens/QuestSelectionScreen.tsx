import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { Quest } from '../callocean-types';

interface QuestSelectionScreenProps {
  quests: Quest[];
  onSelectQuest: (questId: string) => void;
  onBack: () => void;
  playerStats: any;
}

export const QuestSelectionScreen: React.FC<QuestSelectionScreenProps> = ({
  quests,
  onSelectQuest,
  onBack,
  playerStats,
}) => {
  const getQuestImage = (imageName: string) => {
    switch (imageName) {
      case '1':
        return require('../callocean-assets/img/1.png');
      case '2':
        return require('../callocean-assets/img/2.png');
      case '3':
        return require('../callocean-assets/img/3.png');
      case '4':
        return require('../callocean-assets/img/4.png');
      case '5':
        return require('../callocean-assets/img/5.png');
      case '6':
        return require('../callocean-assets/img/6.png');
      default:
        return require('../callocean-assets/img/1.png');
    }
  };

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>CHOOSE QUEST</Text>
      </View>

      {/* Player Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Level: {playerStats.level} | Rank: {playerStats.rank}</Text>
        <Text style={styles.statsText}>Treasures Found: {playerStats.treasuresFound}</Text>
      </View>

      {/* Quests List */}
      <ScrollView style={styles.questsList} showsVerticalScrollIndicator={false}>
        {quests.map((quest) => (
          <TouchableOpacity
            key={quest.id}
            style={styles.questCard}
            onPress={() => onSelectQuest(quest.id)}
          >
            <View style={styles.questImageContainer}>
              <Image 
                source={getQuestImage(quest.image)} 
                style={styles.questImage}
                resizeMode="cover"
              />
            </View>
            
            <View style={styles.questInfo}>
              <Text style={styles.questTitle}>{quest.title}</Text>
              <Text style={styles.questDescription}>{quest.description}</Text>
              
              <View style={styles.questStats}>
                <Text style={styles.questStatText}>
                  Treasures: {quest.treasures.filter(t => t.isFound).length}/{quest.treasures.length}
                </Text>
                <Text style={styles.questStatText}>
                  Progress: {Math.round(quest.progress)}%
                </Text>
              </View>
              
              {quest.isCompleted && (
                <View style={styles.completedBadge}>
                  <Text style={styles.completedText}>COMPLETED!</Text>
                </View>
              )}
            </View>
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
  statsContainer: {
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.golden,
  },
  statsText: {
    fontSize: 16,
    color: colors.yellow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  questsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  questCard: {
    backgroundColor: colors.yellow,
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    borderWidth: 2,
    borderColor: colors.golden,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questImageContainer: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.golden,
  },
  questImage: {
    width: '100%',
    height: 150,
  },
  questInfo: {
    flex: 1,
  },
  questTitle: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  questDescription: {
    fontSize: 16,
    color: colors.black,
    lineHeight: 22,
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  questStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  questStatText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '600',
    fontFamily: 'CrimsonText-Regular',
  },
  completedBadge: {
    backgroundColor: colors.golden,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: 'center',
  },
  completedText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
});
