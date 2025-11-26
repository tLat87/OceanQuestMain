import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { Treasure } from '../callocean-types';

interface TreasureMapScreenProps {
  treasures: Treasure[];
  onBack: () => void;
  onSelectTreasure: (treasureId: string) => void;
  foundTreasures: string[];
}

export const TreasureMapScreen: React.FC<TreasureMapScreenProps> = ({
  treasures,
  onBack,
  onSelectTreasure,
  foundTreasures,
}) => {
  const [selectedTreasure, setSelectedTreasure] = useState<string | null>(null);
  const [pulseAnim] = useState(new Animated.Value(1));

  React.useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, []);

  const getTreasureImage = (imageName: string) => {
    switch (imageName) {
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

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return colors.gray;
      case 'rare': return colors.lightBlue;
      case 'epic': return colors.golden;
      case 'legendary': return colors.yellow;
      default: return colors.gray;
    }
  };

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>TREASURE MAP</Text>
      </View>

      {/* Map Container */}
      <View style={styles.mapContainer}>
        <Image 
          source={require('../callocean-assets/img/39927c36b4a6ef5b42b8c61baa92ba5661f59d35.png')} 
          style={styles.mapImage}
          resizeMode="contain"
        />
        
        {/* Treasure Markers */}
        {treasures.map((treasure, index) => {
          const isFound = foundTreasures.includes(treasure.id);
          const isSelected = selectedTreasure === treasure.id;
          
          return (
            <TouchableOpacity
              key={treasure.id}
              style={[
                styles.treasureMarker,
                {
                  left: 50 + (index * 80) % 250,
                  top: 100 + (index * 60) % 200,
                  backgroundColor: isFound ? colors.golden : getRarityColor(treasure.rarity),
                }
              ]}
              onPress={() => {
                setSelectedTreasure(isSelected ? null : treasure.id);
                if (!isSelected) {
                  onSelectTreasure(treasure.id);
                }
              }}
            >
              <Animated.View style={{ transform: [{ scale: isSelected ? pulseAnim : 1 }] }}>
                <Text style={styles.markerText}>
                  {isFound ? '✓' : '?'}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Selected Treasure Info */}
      {selectedTreasure && (
        <View style={styles.treasureInfo}>
          {(() => {
            const treasure = treasures.find(t => t.id === selectedTreasure);
            if (!treasure) return null;
            
            return (
              <View style={styles.treasureCard}>
                <Image 
                  source={getTreasureImage(treasure.image)} 
                  style={styles.treasureImage}
                  resizeMode="cover"
                />
                <View style={styles.treasureDetails}>
                  <Text style={styles.treasureName}>{treasure.name}</Text>
                  <Text style={styles.treasureDescription}>{treasure.description}</Text>
                  <Text style={styles.treasureLocation}>Location: {treasure.location}</Text>
                  <Text style={styles.treasureValue}>Value: {treasure.value} points</Text>
                  <Text style={[styles.treasureRarity, { color: getRarityColor(treasure.rarity) }]}>
                    {treasure.rarity.toUpperCase()}
                  </Text>
                </View>
              </View>
            );
          })()}
        </View>
      )}

      {/* Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>
          Found: {foundTreasures.length}/{treasures.length} Treasures
        </Text>
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
  mapContainer: {
    flex: 1,
    position: 'relative',
    margin: 20,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: colors.golden,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  treasureMarker: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.black,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  markerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  treasureInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: colors.yellow,
    borderRadius: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: colors.golden,
  },
  treasureCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  treasureImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  treasureDetails: {
    flex: 1,
  },
  treasureName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 5,
    fontFamily: 'CrimsonText-Regular',
  },
  treasureDescription: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 5,
    fontFamily: 'CrimsonText-Regular',
  },
  treasureLocation: {
    fontSize: 12,
    color: colors.black,
    fontStyle: 'italic',
    fontFamily: 'CrimsonText-Regular',
  },
  treasureValue: {
    fontSize: 12,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  treasureRarity: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    fontFamily: 'CrimsonText-Regular',
  },
  statsContainer: {
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.golden,
  },
  statsText: {
    fontSize: 16,
    color: colors.yellow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
});
