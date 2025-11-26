import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { ActionButton } from '../callocean-components/ActionButton';
import { Story } from '../callocean-types';

interface StoriesScreenProps {
  stories: Story[];
  onBack: () => void;
  onViewStory: (storyId: string) => void;
  onSaveStory: (storyId: string) => void;
  onShareStory: (storyId: string) => void;
  savedStories: string[];
}

export const StoriesScreen: React.FC<StoriesScreenProps> = ({
  stories,
  onBack,
  onViewStory,
  onSaveStory,
  onShareStory,
  savedStories,
}) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const currentStory = stories[currentStoryIndex];

  const getStoryImage = (imageName: string) => {
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

  const handleNext = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const isStorySaved = (storyId: string) => savedStories.includes(storyId);

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>STORIES</Text>
      </View>

      {/* Story content */}
      <View style={styles.content}>
        {/* Story card */}
        <TouchableOpacity style={styles.storyCard} activeOpacity={0.9} onPress={() => currentStory && onViewStory(currentStory.id)}>
          {/* Story image */}
          <View style={styles.imageContainer}>
            <Image 
              source={getStoryImage(currentStory?.image || '1')} 
              style={styles.storyImage}
              resizeMode="cover"
            />
          </View>
          
          {/* Story title */}
          <Text style={styles.storyTitle}>{currentStory?.title}</Text>
          
          {/* Story description */}
          <Text style={styles.storyDescription}>{currentStory?.description}</Text>
        </TouchableOpacity>
      </View>

      {/* Action buttons */}
      <View style={styles.actionButtons}>
        {/* <ActionButton 
          icon="⋯" 
          onPress={() => onShareStory(currentStory?.id || '')} 
        /> */}
        <ActionButton 
          icon={isStorySaved(currentStory?.id || '') ? "★" : "☆"} 
          onPress={() => onSaveStory(currentStory?.id || '')} 
        />
        <ActionButton 
          icon="→" 
          onPress={handleNext} 
        />
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
  storyCard: {
    backgroundColor: colors.yellow,
    borderRadius: 15,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.yellow,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.yellow,
  },
  storyImage: {
    width: '100%',
    height: 200,
  },
  storyTitle: {
    fontSize: 22,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left',
    fontFamily: 'CrimsonText-Regular',
  },
  storyDescription: {
    fontSize: 22,
    color: colors.black,
    lineHeight: 28,
    textAlign: 'left',
    fontFamily: 'CrimsonText-Regular',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 0,
    gap: 20,
  },
});
