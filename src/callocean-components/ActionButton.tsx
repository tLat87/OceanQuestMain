import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ActionButtonProps {
  icon: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={['#FFFE57', '#A78900']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.icon}>{icon}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});
