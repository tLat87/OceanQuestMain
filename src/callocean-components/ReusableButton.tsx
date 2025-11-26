import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../callocean-utils/styles';

interface ReusableButtonProps {
  onPress: () => void;
  icon?: string;
  text?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  size?: 'small' | 'medium' | 'large';
  variant?: 'circular' | 'rectangular';
  children?: React.ReactNode;
}

export const ReusableButton: React.FC<ReusableButtonProps> = ({
  onPress,
  icon,
  text,
  style,
  textStyle,
  size = 'medium',
  variant = 'circular',
  children,
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { width: 40, height: 40, borderRadius: 20 };
      case 'large':
        return { width: 60, height: 60, borderRadius: 30 };
      default: // medium
        return { width: 50, height: 50, borderRadius: 25 };
    }
  };

  const getVariantStyles = () => {
    if (variant === 'rectangular') {
      return {
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 15,
        minWidth: 120,
      };
    }
    return {};
  };

  const buttonStyles = [
    styles.button,
    getSizeStyles(),
    getVariantStyles(),
    style,
  ];

  const renderContent = () => {
    if (children) {
      return children;
    }
    if (icon) {
      return <Text style={[styles.icon, textStyle]}>{icon}</Text>;
    }
    if (text) {
      return <Text style={[styles.text, textStyle]}>{text}</Text>;
    }
    return null;
  };

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.yellow,
    justifyContent: 'center',
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
  icon: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});