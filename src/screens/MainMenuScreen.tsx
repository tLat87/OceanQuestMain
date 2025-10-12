import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonStyles, colors } from '../utils/styles';
import { OceanBackground } from '../components/OceanBackground';
import { GradientButton } from '../components/GradientButton';
import { GradientNavButton } from '../components/GradientNavButton';

interface MainMenuScreenProps {
  onStartMission: () => void;
  onHelp: () => void;
  onSaved: () => void;
  onSettings: () => void;
}

export const MainMenuScreen: React.FC<MainMenuScreenProps> = ({
  onStartMission,
  onHelp,
  onSaved,
  onSettings,
}) => {
  return (
    <OceanBackground>
      {/* Header */}
     
      {/* Main content */}
      <View style={styles.mainContent}>
        <Image source={require('../assets/img/39927c36b4a6ef5b42b8c61baa92ba5661f59d35.png')} style={{width: 300, height: 200, alignSelf: 'center'}} />

        {/* Main button */}
        <View style={styles.buttonContainer}>
          <GradientButton
            title="START MISSION"
            onPress={onStartMission}
            style={styles.mainButton}
          />
        </View>
      </View>

      {/* Bottom navigation */}
      <View style={commonStyles.bottomNavigation}>
        <GradientNavButton image={require('../assets/img/questions.png')} onPress={onHelp} />
        <GradientNavButton image={require('../assets/img/star.png')} onPress={onSaved} />
        <GradientNavButton image={require('../assets/img/settings.png')} onPress={onSettings} />
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
  },
});
