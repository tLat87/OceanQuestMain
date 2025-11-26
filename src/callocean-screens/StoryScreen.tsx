import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { commonStyles, colors } from '../callocean-utils/styles';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientButton } from '../callocean-components/GradientButton';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { ActionButton } from '../callocean-components/ActionButton';
import { Story } from '../callocean-types';

interface StoryScreenProps {
  story: Story;
  onBack: () => void;
  onStartStory?: () => void;
  onSaveStory: () => void;
  isSaved: boolean;
  onShare?: () => void;
  onNext?: () => void;
}

export const StoryScreen: React.FC<StoryScreenProps> = ({
  story,
  onBack,
  onStartStory,
  onSaveStory,
  isSaved,
  onShare,
  onNext,
}) => {
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
        <View style={styles.storyCard}>
          {/* Story image */}
          <View style={styles.imageContainer}>
            <Image 
              source={getStoryImage(story.image)} 
              style={styles.storyImage}
              resizeMode="cover"
            />
          </View>
          
          {/* Story title */}
          <Text style={styles.storyTitle}>{story.title}</Text>
          
          {/* Story description */}
          <Text style={styles.storyDescription}>{story.description}</Text>
        </View>
      </View>

      {/* Action buttons */}
      <View style={styles.actionButtons}>
        {/* <ActionButton icon="⋯" onPress={onShare || (() => {})} /> */}
        <ActionButton icon={isSaved ? "★" : "☆"} onPress={onSaveStory} />
        <ActionButton icon="→" onPress={onNext || (() => {})} />
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
    paddingBottom: 40,
    gap: 20,
  },
});