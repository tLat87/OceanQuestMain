import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  ViewStyle,
  ScrollView,
  ViewProps,
} from 'react-native';
import { colors } from '../callocean-utils/styles';

interface OceanBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  showsVerticalScrollIndicator?: boolean;
}

export const OceanBackground: React.FC<OceanBackgroundProps> = ({
  children,
  style,
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        source={require('../callocean-assets/img/06edd5f952da0d9673fdfe9c5913e46c7e35a728.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView
          contentContainerStyle={[styles.content, contentContainerStyle]}
          bounces={false}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        >
          {children}
        </ScrollView>
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
    flexGrow: 1,
    paddingTop: 60,
    paddingBottom: 60,
  },
});
