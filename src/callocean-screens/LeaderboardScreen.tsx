import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientBackButton } from '../callocean-components/GradientBackButton';

interface LeaderboardScreenProps {
  onBack: () => void;
  playerStats: any;
}

interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  level: number;
  rank: string;
  avatar: string;
}

export const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({
  onBack,
  playerStats,
}) => {
  const [selectedTab, setSelectedTab] = useState<'global' | 'friends'>('global');

  // Mock leaderboard data
  const globalLeaderboard: LeaderboardEntry[] = [
    { id: '1', name: 'AquaMaster', score: 15420, level: 15, rank: 'Ocean Master', avatar: '1' },
    { id: '2', name: 'DeepExplorer', score: 12850, level: 12, rank: 'Deep Explorer', avatar: '2' },
    { id: '3', name: 'SeaAdventurer', score: 9650, level: 9, rank: 'Sea Adventurer', avatar: '3' },
    { id: '4', name: 'CoralHunter', score: 7820, level: 7, rank: 'Sea Adventurer', avatar: '4' },
    { id: '5', name: 'TreasureSeeker', score: 6540, level: 6, rank: 'Sea Adventurer', avatar: '5' },
    { id: '6', name: 'OceanQuest', score: playerStats.totalScore, level: playerStats.level, rank: playerStats.rank, avatar: '6' },
    { id: '7', name: 'WaveRider', score: 4320, level: 4, rank: 'Novice Explorer', avatar: '1' },
    { id: '8', name: 'AbyssDiver', score: 3890, level: 3, rank: 'Novice Explorer', avatar: '2' },
    { id: '9', name: 'PearlFinder', score: 3210, level: 3, rank: 'Novice Explorer', avatar: '3' },
    { id: '10', name: 'CoralCollector', score: 2890, level: 2, rank: 'Novice Explorer', avatar: '4' },
  ];

  const friendsLeaderboard: LeaderboardEntry[] = [
    { id: '1', name: 'AquaMaster', score: 15420, level: 15, rank: 'Ocean Master', avatar: '1' },
    { id: '2', name: 'DeepExplorer', score: 12850, level: 12, rank: 'Deep Explorer', avatar: '2' },
    { id: '3', name: 'OceanQuest', score: playerStats.totalScore, level: playerStats.level, rank: playerStats.rank, avatar: '6' },
    { id: '4', name: 'WaveRider', score: 4320, level: 4, rank: 'Novice Explorer', avatar: '1' },
  ];

  const getAvatarImage = (avatarName: string) => {
    switch (avatarName) {
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

  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'Ocean Master': return colors.yellow;
      case 'Deep Explorer': return colors.golden;
      case 'Sea Adventurer': return colors.lightBlue;
      case 'Novice Explorer': return colors.gray;
      default: return colors.gray;
    }
  };

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${position}`;
    }
  };

  const currentLeaderboard = selectedTab === 'global' ? globalLeaderboard : friendsLeaderboard;
  const playerPosition = currentLeaderboard.findIndex(entry => entry.name === 'OceanQuest') + 1;

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>LEADERBOARD</Text>
      </View>

      {/* Player Stats */}
      <View style={styles.playerStatsContainer}>
        <Text style={styles.playerStatsTitle}>Your Position</Text>
        <Text style={styles.playerPosition}>
          {getPositionIcon(playerPosition)} {playerPosition}
        </Text>
        <Text style={styles.playerScore}>
          {playerStats.totalScore} points | Level {playerStats.level}
        </Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'global' && styles.activeTab
          ]}
          onPress={() => setSelectedTab('global')}
        >
          <Text style={[
            styles.tabText,
            selectedTab === 'global' && styles.activeTabText
          ]}>
            Global
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'friends' && styles.activeTab
          ]}
          onPress={() => setSelectedTab('friends')}
        >
          <Text style={[
            styles.tabText,
            selectedTab === 'friends' && styles.activeTabText
          ]}>
            Friends
          </Text>
        </TouchableOpacity>
      </View>

      {/* Leaderboard */}
      <ScrollView style={styles.leaderboardContainer} showsVerticalScrollIndicator={false}>
        {currentLeaderboard.map((entry, index) => {
          const isPlayer = entry.name === 'OceanQuest';
          
          return (
            <View
              key={entry.id}
              style={[
                styles.leaderboardEntry,
                isPlayer && styles.playerEntry
              ]}
            >
              <View style={styles.positionContainer}>
                <Text style={styles.positionText}>
                  {getPositionIcon(index + 1)}
                </Text>
              </View>
              
              <View style={styles.avatarContainer}>
                <Image 
                  source={getAvatarImage(entry.avatar)} 
                  style={styles.avatar}
                  resizeMode="cover"
                />
              </View>
              
              <View style={styles.playerInfo}>
                <Text style={[
                  styles.playerName,
                  isPlayer && styles.playerNameHighlight
                ]}>
                  {entry.name}
                </Text>
                <Text style={[
                  styles.playerRank,
                  { color: getRankColor(entry.rank) }
                ]}>
                  {entry.rank}
                </Text>
              </View>
              
              <View style={styles.scoreContainer}>
                <Text style={[
                  styles.scoreText,
                  isPlayer && styles.scoreTextHighlight
                ]}>
                  {entry.score.toLocaleString()}
                </Text>
                <Text style={styles.levelText}>
                  Lv.{entry.level}
                </Text>
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
  playerStatsContainer: {
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.golden,
    alignItems: 'center',
  },
  playerStatsTitle: {
    fontSize: 16,
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'CrimsonText-Regular',
  },
  playerPosition: {
    fontSize: 24,
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'CrimsonText-Regular',
  },
  playerScore: {
    fontSize: 14,
    color: colors.yellow,
    fontFamily: 'CrimsonText-Regular',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    padding: 5,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: colors.golden,
  },
  tabText: {
    fontSize: 16,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  activeTabText: {
    color: colors.black,
  },
  leaderboardContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  leaderboardEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.yellow,
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: colors.golden,
  },
  playerEntry: {
    backgroundColor: colors.golden,
    borderColor: colors.yellow,
  },
  positionContainer: {
    width: 40,
    alignItems: 'center',
  },
  positionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.black,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 2,
    fontFamily: 'CrimsonText-Regular',
  },
  playerNameHighlight: {
    color: colors.black,
  },
  playerRank: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'CrimsonText-Regular',
  },
  scoreContainer: {
    alignItems: 'flex-end',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 2,
    fontFamily: 'CrimsonText-Regular',
  },
  scoreTextHighlight: {
    color: colors.black,
  },
  levelText: {
    fontSize: 12,
    color: colors.black,
    fontFamily: 'CrimsonText-Regular',
  },
});
