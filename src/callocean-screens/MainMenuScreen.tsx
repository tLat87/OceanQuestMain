import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientButton } from '../callocean-components/GradientButton';
import { GradientNavButton } from '../callocean-components/GradientNavButton';

interface MainMenuScreenProps {
  onStartQuest: () => void;
  onViewMap: () => void;
  onViewInventory: () => void;
  onViewAchievements: () => void;
  onViewLeaderboard: () => void;
  onSettings: () => void;
}

export const MainMenuScreen: React.FC<MainMenuScreenProps> = ({
  onStartQuest,
  onViewMap,
  onViewInventory,
  onViewAchievements,
  onViewLeaderboard,
  onSettings,
}) => {
  return (
    <OceanBackground>
      {/* Header */}
     
      {/* Main content */}
      <View style={styles.mainContent}>
        <Image source={require('../callocean-assets/img/39927c36b4a6ef5b42b8c61baa92ba5661f59d35.png')} style={{width: 300, height: 200, alignSelf: 'center'}} />

        {/* Main buttons */}
        <View style={styles.buttonContainer}>
          <GradientButton
            title="START QUEST"
            onPress={onStartQuest}
            style={styles.mainButton}
          />
          <GradientButton
            title="TREASURE MAP"
            onPress={onViewMap}
            style={styles.secondaryButton}
          />
        </View>
      </View>

      {/* Bottom navigation */}
      <View style={commonStyles.bottomNavigation}>
        <GradientNavButton image={require('../callocean-assets/img/1.png')} onPress={onViewInventory} />
        <GradientNavButton image={require('../callocean-assets/img/star.png')} onPress={onViewAchievements} />
        <GradientNavButton image={require('../callocean-assets/img/2.png')} onPress={onViewLeaderboard} />
        <GradientNavButton image={require('../callocean-assets/img/settings.png')} onPress={onSettings} />
      </View>
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.yellow,
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 22,
    color: colors.yellow,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
    fontFamily: 'CrimsonText-Regular',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 40,
  },
  mainButton: {
    minWidth: 200,
    marginBottom: 15,
  },
  secondaryButton: {
    minWidth: 200,
  },
});
