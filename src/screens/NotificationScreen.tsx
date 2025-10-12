import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { OceanBackground } from '../components/OceanBackground';
import { GradientBackButton } from '../components/GradientBackButton';
import { GradientButton } from '../components/GradientButton';
import { CustomSwitch } from '../components/CustomSwitch';
import { colors } from '../utils/styles';

interface NotificationScreenProps {
  onBack: () => void;
}

export const NotificationScreen: React.FC<NotificationScreenProps> = ({ onBack }) => {
  const [vibration, setVibration] = useState(true);

  const handleShareApp = () => {
    // TODO: Implement share functionality
    console.log('Sharing app...');
  };

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>SETTINGS</Text>
      </View>

      {/* Settings content */}
      <View style={styles.content}>
        {/* Vibration setting */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Vibration</Text>
          <CustomSwitch
            value={vibration}
            onValueChange={setVibration}
          />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Share app button */}
        <View style={styles.shareButtonContainer}>
          <GradientButton
            title="Share app"
            onPress={handleShareApp}
            style={styles.shareButton}
            textStyle={styles.shareButtonText}
          />
        </View>

        {/* App info */}
        <View style={styles.appInfoContainer}>
          <Text style={styles.appInfoTitle}>CallOcean</Text>
          <Text style={styles.appInfoText}>
            Dive into immersive ocean adventures and test your survival skills in the depths of the sea. 
            Experience thrilling scenarios, discover ancient stories, and master the art of ocean navigation.
          </Text>
          <Text style={styles.appInfoVersion}>Version 1.0.0</Text>
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
  backButton: {
    marginRight: 15,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  settingLabel: {
    fontSize: 22,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 10,
  },
  shareButtonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  shareButton: {
    minWidth: 200,
    backgroundColor: colors.yellow,
  },
  shareButtonText: {
    color: colors.black,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  appInfoContainer: {
    marginTop: 40,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  appInfoTitle: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'CrimsonText-Regular',
  },
  appInfoText: {
    fontSize: 22,
    color: colors.white,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'CrimsonText-Regular',
  },
  appInfoVersion: {
    fontSize: 22,
    color: colors.yellow,
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'CrimsonText-Regular',
  },
});