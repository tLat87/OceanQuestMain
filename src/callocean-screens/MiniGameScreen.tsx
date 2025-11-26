import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Alert } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { MiniGame, Treasure } from '../callocean-types';

interface MiniGameScreenProps {
  treasure: Treasure;
  onBack: () => void;
  onComplete: (success: boolean) => void;
}

export const MiniGameScreen: React.FC<MiniGameScreenProps> = ({
  treasure,
  onBack,
  onComplete,
}) => {
  const [gameState, setGameState] = useState<'instructions' | 'playing' | 'completed'>('instructions');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [sequence, setSequence] = useState<string[]>([]);
  const [playerSequence, setPlayerSequence] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isShowingSequence, setIsShowingSequence] = useState(false);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleGameComplete(false);
    }
  }, [timeLeft, gameState]);

  const startGame = () => {
    setGameState('playing');
    generateSequence();
    setTimeLeft(30);
    setScore(0);
  };

  const generateSequence = () => {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const newSequence = [];
    for (let i = 0; i < 4; i++) {
      newSequence.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    setSequence(newSequence);
    setPlayerSequence([]);
    setCurrentStep(0);
    showSequence(newSequence);
  };

  const showSequence = (seq: string[]) => {
    setIsShowingSequence(true);
    let step = 0;
    const interval = setInterval(() => {
      if (step < seq.length) {
        // Highlight the color
        step++;
      } else {
        clearInterval(interval);
        setIsShowingSequence(false);
      }
    }, 1000);
  };

  const handleColorPress = (color: string) => {
    if (isShowingSequence) return;

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[currentStep] === sequence[currentStep]) {
      if (currentStep === sequence.length - 1) {
        // Sequence completed
        setScore(score + 100);
        setCurrentStep(0);
        setPlayerSequence([]);
        generateSequence();
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      // Wrong sequence
      handleGameComplete(false);
    }
  };

  const handleGameComplete = (success: boolean) => {
    setGameState('completed');
    if (success) {
      Alert.alert(
        'Success!',
        `You found the ${treasure.name}!`,
        [{ text: 'OK', onPress: () => onComplete(true) }]
      );
    } else {
      Alert.alert(
        'Game Over',
        'Try again to find the treasure!',
        [{ text: 'OK', onPress: () => onComplete(false) }]
      );
    }
  };

  const getColorStyle = (color: string) => {
    const colorMap = {
      red: '#ff4444',
      blue: '#4444ff',
      green: '#44ff44',
      yellow: '#ffff44',
    };
    return { backgroundColor: colorMap[color as keyof typeof colorMap] || '#666' };
  };

  const renderInstructions = () => (
    <View style={styles.instructionsContainer}>
      <Text style={styles.instructionsTitle}>Memory Game</Text>
      <Text style={styles.instructionsText}>
        Watch the sequence of colors and repeat it in the same order. 
        Each correct sequence gives you 100 points!
      </Text>
      <Text style={styles.instructionsText}>
        Find the {treasure.name} by completing the challenge!
      </Text>
      <TouchableOpacity style={styles.startButton} onPress={startGame}>
        <Text style={styles.startButtonText}>START GAME</Text>
      </TouchableOpacity>
    </View>
  );

  const renderGame = () => (
    <View style={styles.gameContainer}>
      <View style={styles.gameHeader}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Text style={styles.timeText}>Time: {timeLeft}s</Text>
      </View>

      <View style={styles.sequenceContainer}>
        <Text style={styles.sequenceText}>
          {isShowingSequence ? 'Watch the sequence...' : 'Repeat the sequence!'}
        </Text>
      </View>

      <View style={styles.colorGrid}>
        {['red', 'blue', 'green', 'yellow'].map((color) => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorButton,
              getColorStyle(color),
              isShowingSequence && styles.disabledButton
            ]}
            onPress={() => handleColorPress(color)}
            disabled={isShowingSequence}
          />
        ))}
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Step: {currentStep + 1}/{sequence.length}
        </Text>
      </View>
    </View>
  );

  const renderCompleted = () => (
    <View style={styles.completedContainer}>
      <Text style={styles.completedTitle}>Game Complete!</Text>
      <Text style={styles.completedText}>Final Score: {score}</Text>
    </View>
  );

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>MINI GAME</Text>
      </View>

      {/* Treasure Info */}
      <View style={styles.treasureInfo}>
        <Image 
          source={require('../callocean-assets/img/1.png')} 
          style={styles.treasureImage}
          resizeMode="cover"
        />
        <Text style={styles.treasureName}>{treasure.name}</Text>
      </View>

      {/* Game Content */}
      <View style={styles.gameContent}>
        {gameState === 'instructions' && renderInstructions()}
        {gameState === 'playing' && renderGame()}
        {gameState === 'completed' && renderCompleted()}
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
  treasureInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.golden,
  },
  treasureImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  treasureName: {
    fontSize: 18,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  gameContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  instructionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionsTitle: {
    fontSize: 24,
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  instructionsText: {
    fontSize: 16,
    color: colors.yellow,
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 22,
    fontFamily: 'CrimsonText-Regular',
  },
  startButton: {
    backgroundColor: colors.golden,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  startButtonText: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  gameContainer: {
    flex: 1,
  },
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  timeText: {
    fontSize: 18,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  sequenceContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  sequenceText: {
    fontSize: 20,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  colorButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    borderWidth: 3,
    borderColor: colors.black,
  },
  disabledButton: {
    opacity: 0.5,
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  completedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedTitle: {
    fontSize: 24,
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  completedText: {
    fontSize: 18,
    color: colors.yellow,
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
});
