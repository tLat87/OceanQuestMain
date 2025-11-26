import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { Achievement } from '../callocean-types';

interface AchievementsScreenProps {
  achievements: Achievement[];
  onBack: () => void;
  unlockedAchievements: string[];
}

export const AchievementsScreen: React.FC<AchievementsScreenProps> = ({
  achievements,
  onBack,
  unlockedAchievements,
}) => {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return require('../callocean-assets/img/star.png');
      case 'coral':
        return require('../callocean-assets/img/1.png');
      case 'treasure':
        return require('../callocean-assets/img/5.png');
      case 'crown':
        return require('../callocean-assets/img/6.png');
      default:
        return require('../callocean-assets/img/star.png');
    }
  };

  const unlockedCount = achievements.filter(a => a.isUnlocked).length;
  const totalCount = achievements.length;
  const progressPercentage = (unlockedCount / totalCount) * 100;

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>ACHIEVEMENTS</Text>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Progress: {unlockedCount}/{totalCount} ({Math.round(progressPercentage)}%)
        </Text>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${progressPercentage}%` }
            ]} 
          />
        </View>
      </View>

      {/* Achievements List */}
      <ScrollView style={styles.achievementsList} showsVerticalScrollIndicator={false}>
        {achievements.map((achievement) => {
          const isUnlocked = unlockedAchievements.includes(achievement.id);
          
          return (
            <View
              key={achievement.id}
              style={[
                styles.achievementCard,
                { 
                  opacity: isUnlocked ? 1 : 0.6,
                  borderColor: isUnlocked ? colors.golden : colors.gray,
                }
              ]}
            >
              <View style={styles.achievementIcon}>
                <Image 
                  source={getAchievementIcon(achievement.icon)} 
                  style={[
                    styles.iconImage,
                    { opacity: isUnlocked ? 1 : 0.5 }
                  ]}
                  resizeMode="cover"
                />
                {isUnlocked && (
                  <View style={styles.unlockedBadge}>
                    <Text style={styles.unlockedText}>✓</Text>
                  </View>
                )}
              </View>
              
              <View style={styles.achievementInfo}>
                <Text style={[
                  styles.achievementTitle,
                  { color: isUnlocked ? colors.black : colors.gray }
                ]}>
                  {achievement.title}
                </Text>
                <Text style={[
                  styles.achievementDescription,
                  { color: isUnlocked ? colors.black : colors.gray }
                ]}>
                  {achievement.description}
                </Text>
                
                {!isUnlocked && achievement.maxProgress > 1 && (
                  <View style={styles.progressContainer}>
                    <View style={styles.miniProgressBar}>
                      <View 
                        style={[
                          styles.miniProgressFill, 
                          { width: `${(achievement.progress / achievement.maxProgress) * 100}%` }
                        ]} 
                      />
                    </View>
                    <Text style={styles.progressText}>
                      {achievement.progress}/{achievement.maxProgress}
                    </Text>
                  </View>
                )}
                
                <View style={styles.rewardContainer}>
                  <Text style={styles.rewardText}>
                    Reward: {achievement.reward.name} (+{achievement.reward.value} pts)
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
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
  progressContainer: {
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.golden,
  },
  progressText: {
    fontSize: 16,
    color: colors.yellow,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'CrimsonText-Regular',
  },
  progressBar: {
    height: 10,
    backgroundColor: colors.darkGray,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.golden,
    borderRadius: 5,
  },
  achievementsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  achievementCard: {
    backgroundColor: colors.yellow,
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    borderWidth: 2,
    flexDirection: 'row',
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
  achievementIcon: {
    position: 'relative',
    marginRight: 15,
  },
  iconImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  unlockedBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: colors.golden,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.black,
  },
  unlockedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'CrimsonText-Regular',
  },
  achievementDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
    fontFamily: 'CrimsonText-Regular',
  },
  miniProgressBar: {
    height: 6,
    backgroundColor: colors.darkGray,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 5,
  },
  miniProgressFill: {
    height: '100%',
    backgroundColor: colors.golden,
    borderRadius: 3,
  },
  rewardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    padding: 8,
    marginTop: 5,
  },
  rewardText: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '600',
    fontFamily: 'CrimsonText-Regular',
  },
});
