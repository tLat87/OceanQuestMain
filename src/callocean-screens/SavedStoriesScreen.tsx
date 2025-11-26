import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { GradientNavButton } from '../callocean-components/GradientNavButton';
import { Story } from '../callocean-types';

interface SavedStoriesScreenProps {
  savedStories: Story[];
  onBack: () => void;
  onViewStory: (storyId: string) => void;
}

export const SavedStoriesScreen: React.FC<SavedStoriesScreenProps> = ({
  savedStories,
  onBack,
  onViewStory,
}) => {
  return (
    <OceanBackground>
      {/* Header */}
      <View style={commonStyles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={commonStyles.headerTitle}>SAVED STORIES</Text>
      </View>

      {/* Stories list */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {savedStories.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No saved stories yet</Text>
            <Text style={styles.emptySubtext}>Save stories during gameplay to see them here</Text>
          </View>
        ) : (
          savedStories.map((story) => (
            <TouchableOpacity
              key={story.id}
              style={styles.storyCard}
              onPress={() => onViewStory(story.id)}
            >
              <Text style={styles.storyTitle}>{story.title}</Text>
              <Text style={styles.storyDescription} numberOfLines={2}>
                {story.description}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>

      {/* Bottom navigation */}
      <View style={commonStyles.bottomNavigation}>
        <GradientNavButton image={require('../callocean-assets/img/Group.png')} onPress={() => {}} />
        <GradientNavButton image={require('../callocean-assets/img/Star 1.png')} onPress={() => {}} />
        <GradientNavButton image={require('../callocean-assets/img/BTN.png')} onPress={() => {}} />
      </View>
    </OceanBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 100,
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'CrimsonText-Regular',
  },
  emptySubtext: {
    fontSize: 22,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 28,
    fontFamily: 'CrimsonText-Regular',
  },
  storyCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: colors.yellow,
  },
  storyTitle: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'CrimsonText-Regular',
  },
  storyDescription: {
    fontSize: 22,
    color: colors.white,
    lineHeight: 28,
    fontFamily: 'CrimsonText-Regular',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButtonText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  navButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
  navButtonText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
});