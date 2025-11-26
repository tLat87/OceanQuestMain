import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { OceanBackground } from '../callocean-components/OceanBackground';
import { GradientBackButton } from '../callocean-components/GradientBackButton';
import { GradientButton } from '../callocean-components/GradientButton';
import { CustomSwitch } from '../callocean-components/CustomSwitch';
import { colors } from '../callocean-utils/styles';
import { Notification } from '../callocean-types';

interface NotificationScreenProps {
  onBack: () => void;
  notifications: Notification[];
  onMarkRead: (notificationId: string) => void;
  onOpenStory: (storyId: string) => void;
  onOpenStories: () => void;
  onOpenSavedStories: () => void;
  onOpenHelp: () => void;
}

export const NotificationScreen: React.FC<NotificationScreenProps> = ({
  onBack,
  notifications,
  onMarkRead,
  onOpenStory,
  onOpenStories,
  onOpenSavedStories,
  onOpenHelp,
}) => {
  const [vibration, setVibration] = useState(true);

  const handleShareApp = () => {
    // TODO: Implement share functionality
    console.log('Sharing app...');
  };

  const handleNotificationPress = (notification: Notification) => {
    if (!notification.isRead) {
      onMarkRead(notification.id);
    }
    if (notification.relatedStoryId) {
      onOpenStory(notification.relatedStoryId);
    }
  };

  return (
    <OceanBackground>
      {/* Header */}
      <View style={styles.header}>
        <GradientBackButton onPress={onBack} style={styles.backButton} />
        <Text style={styles.headerTitle}>SETTINGS</Text>
      </View>

      {/* Settings content */}
      <View style={styles.content}>
        {/* Vibration setting */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Vibration</Text>
          <CustomSwitch
            value={vibration}
            onValueChange={setVibration}
          />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Share app button */}
        <View style={styles.shareButtonContainer}>
          <GradientButton
            title="Share app"
            onPress={handleShareApp}
            style={styles.shareButton}
            textStyle={styles.shareButtonText}
          />
        </View>

        <View style={styles.shortcutsContainer}>
          <GradientButton
            title="Story Library"
            onPress={onOpenStories}
            style={styles.shortcutButton}
          />
          <GradientButton
            title="Saved Stories"
            onPress={onOpenSavedStories}
            style={styles.shortcutButton}
          />
        </View>

        {/* App info */}
        <View style={styles.appInfoContainer}>
          <Text style={styles.appInfoTitle}>CallOcean</Text>
          <Text style={styles.appInfoText}>
            Dive into immersive ocean adventures and test your survival skills in the depths of the sea. 
            Experience thrilling scenarios, discover ancient stories, and master the art of ocean navigation.
          </Text>
          <Text style={styles.appInfoVersion}>Version 1.0.0</Text>

          <TouchableOpacity style={styles.helpLink} onPress={onOpenHelp}>
            <Text style={styles.helpLinkText}>Need lore hints? Open the help codex →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.feedHeader}>
          <Text style={styles.feedTitle}>Chronicle feed</Text>
          <Text style={styles.feedSubtitle}>Tap any entry to re-open the moment</Text>
        </View>

        <ScrollView style={styles.feedContainer} showsVerticalScrollIndicator={false}>
          {notifications.map(notification => (
            <TouchableOpacity
              key={notification.id}
              style={[
                styles.notificationCard,
                !notification.isRead && styles.notificationUnread,
              ]}
              activeOpacity={0.85}
              onPress={() => handleNotificationPress(notification)}
            >
              <View style={styles.notificationHeader}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.notificationTime}>
                  {new Date(notification.timestamp).toLocaleTimeString()}
                </Text>
              </View>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationType}>{notification.type.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
          {notifications.length === 0 && (
            <View style={styles.emptyFeed}>
              <Text style={styles.emptyFeedText}>Your ocean log is calm for now.</Text>
              <Text style={styles.emptyFeedSubtext}>
                Start a scenario to create a new entry.
              </Text>
            </View>
          )}
        </ScrollView>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  settingLabel: {
    fontSize: 22,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 10,
  },
  shareButtonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  shareButton: {
    minWidth: 200,
    backgroundColor: colors.yellow,
  },
  shareButtonText: {
    color: colors.black,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  appInfoContainer: {
    marginTop: 40,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  appInfoTitle: {
    fontSize: 22,
    color: colors.yellow,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'CrimsonText-Regular',
  },
  appInfoText: {
    fontSize: 22,
    color: colors.white,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'CrimsonText-Regular',
  },
  appInfoVersion: {
    fontSize: 22,
    color: colors.yellow,
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'CrimsonText-Regular',
  },
  shortcutsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10,
  },
  shortcutButton: {
    flex: 1,
  },
  helpLink: {
    marginTop: 15,
  },
  helpLinkText: {
    fontSize: 16,
    color: colors.yellow,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'CrimsonText-Regular',
  },
  feedHeader: {
    marginTop: 30,
  },
  feedTitle: {
    fontSize: 20,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  feedSubtitle: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'CrimsonText-Regular',
  },
  feedContainer: {
    marginTop: 15,
  },
  notificationCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  notificationUnread: {
    borderColor: colors.yellow,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  notificationTitle: {
    fontSize: 16,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  notificationTime: {
    fontSize: 12,
    color: colors.white,
    fontFamily: 'CrimsonText-Regular',
  },
  notificationMessage: {
    fontSize: 14,
    color: colors.white,
    marginBottom: 5,
    fontFamily: 'CrimsonText-Regular',
  },
  notificationType: {
    fontSize: 12,
    color: colors.yellow,
    fontStyle: 'italic',
    fontFamily: 'CrimsonText-Regular',
  },
  emptyFeed: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyFeedText: {
    fontSize: 18,
    color: colors.yellow,
    fontWeight: 'bold',
    fontFamily: 'CrimsonText-Regular',
  },
  emptyFeedSubtext: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'CrimsonText-Regular',
  },
});