import React from 'react';
import { View, ImageBackground, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../callocean-utils/styles';

interface OceanBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const OceanBackground: React.FC<OceanBackgroundProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        source={require('../callocean-assets/img/06edd5f952da0d9673fdfe9c5913e46c7e35a728.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Content with top and bottom padding */}
        <View style={styles.content}>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingTop: 60, // Top padding
    paddingBottom: 60, // Bottom padding
  },
});
