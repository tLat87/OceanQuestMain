import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { Treasure } from '../callocean-types';

interface InventoryScreenProps {
  treasures: Treasure[];
  onBack: () => void;
}

export const InventoryScreen: React.FC<InventoryScreenProps> = ({
  treasures,
  onBack,
}) => {
  const [selectedTreasure, setSelectedTreasure] = useState<Treasure | null>(null);
  const [showModal, setShowModal] = useState(false);

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

  const getRarityGradient = (rarity: string) => {
    switch (rarity) {
      case 'common': return [colors.gray, colors.darkGray];
      case 'rare': return [colors.lightBlue, colors.oceanBlue];
      case 'epic': return [colors.golden, colors.darkGolden];
      case 'legendary': return [colors.yellow, colors.golden];
      default: return [colors.gray, colors.darkGray];
    }
  };

  const foundTreasures = treasures.filter(t => t.isFound);
  const totalValue = foundTreasures.reduce((sum, treasure) => sum + treasure.value, 0);

  const handleTreasurePress = (treasure: Treasure) => {
    setSelectedTreasure(treasure);
    setShowModal(true);
  };

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>INVENTORY</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>
          Treasures: {foundTreasures.length}/{treasures.length}
        </Text>
        <Text style={styles.statsText}>
          Total Value: {totalValue} points
        </Text>
      </View>

      {/* Treasures Grid */}
      <ScrollView style={styles.treasuresContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.treasuresGrid}>
          {foundTreasures.map((treasure) => (
            <TouchableOpacity
              key={treasure.id}
              style={[
                styles.treasureCard,
                { borderColor: getRarityColor(treasure.rarity) }
              ]}
              onPress={() => handleTreasurePress(treasure)}
            >
              <View style={styles.treasureImageContainer}>
                <Image 
                  source={getTreasureImage(treasure.image)} 
                  style={styles.treasureImage}
                  resizeMode="cover"
                />
                <View style={[
                  styles.rarityBadge,
                  { backgroundColor: getRarityColor(treasure.rarity) }
                ]}>
                  <Text style={styles.rarityText}>
                    {treasure.rarity.charAt(0).toUpperCase()}
                  </Text>
                </View>
              </View>
              
              <Text style={styles.treasureName} numberOfLines={2}>
                {treasure.name}
              </Text>
              <Text style={styles.treasureValue}>
                {treasure.value} pts
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {foundTreasures.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              No treasures found yet!
            </Text>
            <Text style={styles.emptyStateSubtext}>
              Start exploring to find amazing treasures!
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Treasure Detail Modal */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedTreasure && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{selectedTreasure.name}</Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setShowModal(false)}
                  >
                    <Text style={styles.closeButtonText}>×</Text>
                  </TouchableOpacity>
                </View>
                
                <Image 
                  source={getTreasureImage(selectedTreasure.image)} 
                  style={styles.modalImage}
                  resizeMode="cover"
                />
                
                <View style={styles.modalDetails}>
                  <Text style={styles.modalDescription}>
                    {selectedTreasure.description}
                  </Text>
                  
                  <View style={styles.modalStats}>
                    <Text style={styles.modalStat}>
                      <Text style={styles.modalStatLabel}>Location: </Text>
                      {selectedTreasure.location}
                    </Text>
                    <Text style={styles.modalStat}>
                      <Text style={styles.modalStatLabel}>Value: </Text>
                      {selectedTreasure.value} points
                    </Text>
                    <Text style={styles.modalStat}>
                      <Text style={styles.modalStatLabel}>Rarity: </Text>
                      <Text style={{ color: getRarityColor(selectedTreasure.rarity) }}>
                        {selectedTreasure.rarity.toUpperCase()}
                      </Text>
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
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
  treasuresContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  treasuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  treasureCard: {
    width: '48%',
    backgroundColor: colors.yellow,
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  treasureImageContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  treasureImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  rarityBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rarityText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black,
  },
  treasureName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 5,
    fontFamily: 'CrimsonText-Regular',
  },
  treasureValue: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '600',
    fontFamily: 'CrimsonText-Regular',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyStateText: {
    fontSize: 20,
    color: colors.yellow,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'CrimsonText-Regular',
  },
  emptyStateSubtext: {
    fontSize: 16,
    color: colors.yellow,
    textAlign: 'center',
    fontFamily: 'CrimsonText-Regular',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.yellow,
    borderRadius: 20,
    padding: 20,
    margin: 20,
    maxWidth: '90%',
    maxHeight: '80%',
    borderWidth: 3,
    borderColor: colors.golden,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    flex: 1,
    fontFamily: 'CrimsonText-Regular',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    color: colors.yellow,
    fontWeight: 'bold',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  modalDetails: {
    flex: 1,
  },
  modalDescription: {
    fontSize: 16,
    color: colors.black,
    lineHeight: 22,
    marginBottom: 15,
    fontFamily: 'CrimsonText-Regular',
  },
  modalStats: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 10,
  },
  modalStat: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 5,
    fontFamily: 'CrimsonText-Regular',
  },
  modalStatLabel: {
    fontWeight: 'bold',
  },
});
