import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameProvider, useGame } from '../callocean-utils/GameContext';
import { OnboardingFlowSimple } from './OnboardingFlowSimple';
import { quests, achievements, scenarios, storyLibrary } from '../callocean-data/stories';
import { MainMenuScreen } from '../callocean-screens/MainMenuScreen';
import { QuestSelectionScreen } from '../callocean-screens/QuestSelectionScreen';
import { TreasureMapScreen } from '../callocean-screens/TreasureMapScreen';
import { InventoryScreen } from '../callocean-screens/InventoryScreen';
import { AchievementsScreen } from '../callocean-screens/AchievementsScreen';
import { LeaderboardScreen } from '../callocean-screens/LeaderboardScreen';
import { MiniGameScreen } from '../callocean-screens/MiniGameScreen';
import { NotificationScreen } from '../callocean-screens/NotificationScreen';
import { ScenarioSelectionScreen } from '../callocean-screens/ScenarioSelectionScreen';
import { QuestionScreen } from '../callocean-screens/QuestionScreen';
import { StoriesScreen } from '../callocean-screens/StoriesScreen';
import { StoryScreen } from '../callocean-screens/StoryScreen';
import { SavedStoriesScreen } from '../callocean-screens/SavedStoriesScreen';
import { StoriesHelpScreen } from '../callocean-screens/StoriesHelpScreen';
import { Scenario, Story, Treasure } from '../callocean-types';
import { colors } from '../callocean-utils/styles';

type ScreenName =
  | 'onboarding'
  | 'main'
  | 'quests'
  | 'map'
  | 'inventory'
  | 'achievements'
  | 'leaderboard'
  | 'minigame'
  | 'notifications'
  | 'scenarios'
  | 'question'
  | 'story'
  | 'stories'
  | 'savedStories'
  | 'storiesHelp';

const NavigationContent: React.FC = () => {
  const { state, dispatch } = useGame();
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('onboarding');
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [impactScores, setImpactScores] = useState<Record<string, number>>({});
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);

  const questList = useMemo(() => {
    return quests.map(quest => {
      const treasuresWithState = quest.treasures.map(treasure => ({
        ...treasure,
        isFound: state.foundTreasures.includes(treasure.id),
      }));
      const foundCount = treasuresWithState.filter(t => t.isFound).length;
      const progress = quest.treasures.length ? (foundCount / quest.treasures.length) * 100 : 0;
      return {
        ...quest,
        treasures: treasuresWithState,
        progress,
        isCompleted: state.completedQuests.includes(quest.id),
      };
    });
  }, [state.foundTreasures, state.completedQuests]);

  const achievementsList = useMemo(() => {
    return achievements.map(achievement => {
      const isUnlocked = state.unlockedAchievements.includes(achievement.id);
      let derivedProgress = achievement.progress;
      switch (achievement.id) {
        case 'first-treasure':
          derivedProgress = Math.min(state.playerStats.treasuresFound, achievement.maxProgress);
          break;
        case 'treasure-hunter':
          derivedProgress = Math.min(state.playerStats.treasuresFound, achievement.maxProgress);
          break;
        case 'ocean-master':
          derivedProgress = Math.min(state.completedQuests.length, achievement.maxProgress);
          break;
        case 'coral-master':
          derivedProgress = state.completedQuests.includes('coral-kingdom') ? achievement.maxProgress : 0;
          break;
        default:
          derivedProgress = isUnlocked ? achievement.maxProgress : achievement.progress;
      }
      return {
        ...achievement,
        isUnlocked,
        progress: derivedProgress,
      };
    });
  }, [state.unlockedAchievements, state.playerStats.treasuresFound, state.completedQuests]);

  const savedStories = useMemo(
    () => storyLibrary.filter(story => state.savedStories.includes(story.id)),
    [state.savedStories]
  );

  const activeScenario: Scenario | null = useMemo(
    () => scenarios.find(scenario => scenario.id === activeScenarioId) || null,
    [activeScenarioId]
  );
  const currentQuestion = activeScenario ? activeScenario.questions[questionIndex] : null;
  const currentStory: Story | null = useMemo(
    () => (activeStoryId ? storyLibrary.find(story => story.id === activeStoryId) || null : null),
    [activeStoryId]
  );

  const getCurrentTreasure = (): Treasure | null => {
    if (!state.currentTreasure) return null;
    return state.inventory.find(t => t.id === state.currentTreasure) || null;
  };

  const resetStoryFlow = () => {
    setActiveScenarioId(null);
    setQuestionIndex(0);
    setImpactScores({});
  };

  const determineScenarioEnding = (scenario: Scenario, scores: Record<string, number>) => {
    if (!scenario.endings.length) return null;
    return [...scenario.endings].sort((a, b) => {
      const scoreA = scores[a.focus] || 0;
      const scoreB = scores[b.focus] || 0;
      if (scoreB === scoreA) {
        return 0;
      }
      return scoreB - scoreA;
    })[0];
  };

  const handleStartQuest = () => {
    resetStoryFlow();
    setCurrentScreen('scenarios');
  };

  const handleSelectQuest = (questId: string) => {
    dispatch({ type: 'START_QUEST', questId });
    setCurrentScreen('map');
  };

  const handleViewMap = () => setCurrentScreen('map');
  const handleViewInventory = () => setCurrentScreen('inventory');
  const handleViewAchievements = () => setCurrentScreen('achievements');
  const handleViewLeaderboard = () => setCurrentScreen('leaderboard');

  const handleSelectTreasure = (treasureId: string) => {
    dispatch({ type: 'START_TREASURE_HUNT', treasureId });
    setCurrentScreen('minigame');
  };

  const handleMiniGameComplete = (success: boolean) => {
    if (success && state.currentTreasure) {
      dispatch({ type: 'FIND_TREASURE', treasureId: state.currentTreasure });
      dispatch({ type: 'ADD_EXPERIENCE', amount: 100 });
    }
    setCurrentScreen('map');
  };

  const handleOnboardingComplete = () => setCurrentScreen('main');

  const handleSelectScenario = (scenarioId: string) => {
    setActiveScenarioId(scenarioId);
    setQuestionIndex(0);
    setImpactScores({});
    setCurrentScreen('question');
  };

  const handleScenarioAnswer = (optionId: string) => {
    if (!activeScenario || !currentQuestion) return;
    const option = currentQuestion.options.find(opt => opt.id === optionId);
    if (!option) return;

    const updatedScores = {
      ...impactScores,
      [option.impact]: (impactScores[option.impact] || 0) + 1,
    };
    setImpactScores(updatedScores);

    if (option.reward?.experience) {
      dispatch({ type: 'ADD_EXPERIENCE', amount: option.reward.experience });
    }
    if (option.reward?.treasureId) {
      dispatch({ type: 'FIND_TREASURE', treasureId: option.reward.treasureId });
    }
    if (option.reward?.achievementId) {
      dispatch({ type: 'UNLOCK_ACHIEVEMENT', achievementId: option.reward.achievementId });
    }
    if (option.reward?.notification) {
      dispatch({
        type: 'PUSH_NOTIFICATION',
        notification: {
          id: `notif-option-${Date.now()}`,
          title: option.reward.notification.title,
          message: option.reward.notification.message,
          timestamp: new Date().toISOString(),
          type: 'system',
          relatedStoryId: undefined,
          isRead: false,
        },
      });
    }

    const isLastQuestion = questionIndex === activeScenario.questions.length - 1;
    if (isLastQuestion) {
      const ending = determineScenarioEnding(activeScenario, updatedScores);
      if (ending) {
        dispatch({ type: 'COMPLETE_QUEST', questId: activeScenario.questRewardId });
        ending.rewards.forEach(reward => {
          dispatch({ type: 'ADD_EXPERIENCE', amount: reward.value });
          const treasureExists = state.inventory.find(t => t.id === reward.id);
          if (reward.type === 'treasure' && treasureExists) {
            dispatch({ type: 'FIND_TREASURE', treasureId: reward.id });
          }
          const achievementExists = achievements.find(a => a.id === reward.id);
          if (reward.type === 'achievement' && achievementExists) {
            dispatch({ type: 'UNLOCK_ACHIEVEMENT', achievementId: reward.id });
          }
        });

        dispatch({
          type: 'LOG_STORY',
          entry: {
            id: `story-log-${Date.now()}`,
            storyId: ending.storyId,
            scenarioId: activeScenario.id,
            endingId: ending.id,
            timestamp: new Date().toISOString(),
          },
        });

        const story = storyLibrary.find(item => item.id === ending.storyId);
        if (story) {
          dispatch({
            type: 'PUSH_NOTIFICATION',
            notification: {
              id: `notif-story-${Date.now()}`,
              title: 'Новая хроника',
              message: `${story.title} добавлена в журнал.`,
              timestamp: new Date().toISOString(),
              type: 'story',
              relatedStoryId: story.id,
              isRead: false,
            },
          });
          setActiveStoryId(story.id);
        }
      }
      setCurrentScreen('story');
      resetStoryFlow();
    } else {
      setQuestionIndex(prev => prev + 1);
    }
  };

  const handleStorySave = (storyId: string) => {
    if (!storyId) return;
    if (state.savedStories.includes(storyId)) {
      dispatch({ type: 'UNSAVE_STORY', storyId });
    } else {
      dispatch({ type: 'SAVE_STORY', storyId });
    }
  };

  const handleOpenStory = (storyId: string) => {
    if (!storyId) return;
    setActiveStoryId(storyId);
    setCurrentScreen('story');
  };

  const handleOpenStories = () => setCurrentScreen('stories');
  const handleOpenSavedStories = () => setCurrentScreen('savedStories');
  const handleOpenStoriesHelp = () => setCurrentScreen('storiesHelp');

  const handleMarkNotificationRead = (notificationId: string) => {
    dispatch({ type: 'MARK_NOTIFICATION_READ', notificationId });
  };

  const handleBack = () => {
    switch (currentScreen) {
      case 'quests':
      case 'inventory':
      case 'achievements':
      case 'leaderboard':
      case 'notifications':
      case 'stories':
        setCurrentScreen('main');
        break;
      case 'map':
        setCurrentScreen('quests');
        break;
      case 'minigame':
        setCurrentScreen('map');
        break;
      case 'scenarios':
        setCurrentScreen('main');
        break;
      case 'question':
        setCurrentScreen('scenarios');
        break;
      case 'story':
        setCurrentScreen('stories');
        break;
      case 'savedStories':
      case 'storiesHelp':
        setCurrentScreen('stories');
        break;
      default:
        setCurrentScreen('main');
    }
  };

  const handleSettings = () => setCurrentScreen('notifications');

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingFlowSimple onComplete={handleOnboardingComplete} />;
      case 'main':
        return (
          <MainMenuScreen
            onStartQuest={handleStartQuest}
            onViewMap={handleViewMap}
            onViewInventory={handleViewInventory}
            onViewAchievements={handleViewAchievements}
            onViewLeaderboard={handleViewLeaderboard}
            onSettings={handleSettings}
          />
        );
      case 'scenarios':
        return (
          <ScenarioSelectionScreen
            scenarios={scenarios}
            onSelectScenario={handleSelectScenario}
            onBack={handleBack}
          />
        );
      case 'question':
        if (!activeScenario || !currentQuestion) {
          setCurrentScreen('scenarios');
          return null;
        }
        return (
          <QuestionScreen
            question={currentQuestion}
            questionNumber={questionIndex + 1}
            totalQuestions={activeScenario.questions.length}
            scenarioTitle={activeScenario.title}
            onSelectAnswer={handleScenarioAnswer}
            onBack={handleBack}
          />
        );
      case 'story':
        if (!currentStory) {
          setCurrentScreen('stories');
          return null;
        }
        return (
          <StoryScreen
            story={currentStory}
            onBack={handleBack}
            onSaveStory={() => handleStorySave(currentStory.id)}
            isSaved={state.savedStories.includes(currentStory.id)}
            onNext={handleOpenStories}
          />
        );
      case 'stories':
        return (
          <StoriesScreen
            stories={storyLibrary}
            onBack={handleBack}
            onViewStory={handleOpenStory}
            onSaveStory={handleStorySave}
            onShareStory={() => {}}
            savedStories={state.savedStories}
          />
        );
      case 'savedStories':
        return (
          <SavedStoriesScreen
            savedStories={savedStories}
            onBack={handleBack}
            onViewStory={handleOpenStory}
          />
        );
      case 'storiesHelp':
        return <StoriesHelpScreen onBack={handleBack} onGoToStories={handleOpenStories} />;
      case 'quests':
        return (
          <QuestSelectionScreen
            quests={questList}
            onSelectQuest={handleSelectQuest}
            onBack={handleBack}
            playerStats={state.playerStats}
          />
        );
      case 'map':
        return (
          <TreasureMapScreen
            treasures={state.inventory}
            onBack={handleBack}
            onSelectTreasure={handleSelectTreasure}
            foundTreasures={state.foundTreasures}
          />
        );
      case 'inventory':
        return <InventoryScreen treasures={state.inventory} onBack={handleBack} />;
      case 'achievements':
        return (
          <AchievementsScreen
            achievements={achievementsList}
            onBack={handleBack}
            unlockedAchievements={state.unlockedAchievements}
          />
        );
      case 'leaderboard':
        return <LeaderboardScreen onBack={handleBack} playerStats={state.playerStats} />;
      case 'minigame': {
        const treasure = getCurrentTreasure();
        if (!treasure) {
          setCurrentScreen('main');
          return null;
        }
        return <MiniGameScreen treasure={treasure} onBack={handleBack} onComplete={handleMiniGameComplete} />;
      }
      case 'notifications':
        return (
          <NotificationScreen
            onBack={handleBack}
            notifications={state.notifications}
            onMarkRead={handleMarkNotificationRead}
            onOpenStory={handleOpenStory}
            onOpenStories={handleOpenStories}
            onOpenSavedStories={handleOpenSavedStories}
            onOpenHelp={handleOpenStoriesHelp}
          />
        );
      default:
        return (
          <MainMenuScreen
            onStartQuest={handleStartQuest}
            onViewMap={handleViewMap}
            onViewInventory={handleViewInventory}
            onViewAchievements={handleViewAchievements}
            onViewLeaderboard={handleViewLeaderboard}
            onSettings={handleSettings}
          />
        );
    }
  };

  const screen = renderCurrentScreen();
  if (!screen) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>Loading...</Text>
      </View>
    );
  }

  return screen;
};

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    backgroundColor: colors.oceanBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 24,
    color: colors.yellow,
    fontWeight: 'bold',
  },
});

export const Navigation: React.FC = () => (
  <GameProvider>
    <NavigationContent />
  </GameProvider>
);