import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameProvider, useGame } from '../utils/GameContext';
import { OnboardingFlowSimple } from './OnboardingFlowSimple';
import { scenarios } from '../data/stories';
import { MainMenuScreen } from '../screens/MainMenuScreen';
import { ScenarioSelectionScreen } from '../screens/ScenarioSelectionScreen';
import { StoryScreen } from '../screens/StoryScreen';
import { QuestionScreen } from '../screens/QuestionScreen';
import { FeedbackScreen } from '../screens/FeedbackScreen';
import { SavedStoriesScreen } from '../screens/SavedStoriesScreen';
import { NotificationScreen } from '../screens/NotificationScreen';
import { StoriesHelpScreen } from '../screens/StoriesHelpScreen';
import { StoriesScreen } from '../screens/StoriesScreen';
import { Story, Question } from '../types';
import { colors } from '../utils/styles';

// Simple navigation without React Navigation to avoid white screen issues

const NavigationContent: React.FC = () => {
  const { state, dispatch } = useGame();
  const [currentScreen, setCurrentScreen] = useState<'onboarding' | 'main' | 'scenarios' | 'story' | 'question' | 'feedback' | 'saved' | 'notifications' | 'stories-help' | 'stories'>('onboarding');

  // Helper functions
  const getCurrentStory = (): Story | null => {
    if (!state.currentScenario || !state.currentStory) return null;
    const scenario = scenarios.find(s => s.id === state.currentScenario);
    return scenario?.stories.find(story => story.id === state.currentStory) || null;
  };

  const getCurrentQuestion = (): Question | null => {
    const story = getCurrentStory();
    if (!story || state.currentQuestionIndex >= story.questions.length) return null;
    return story.questions[state.currentQuestionIndex];
  };

  const isStorySaved = (storyId: string): boolean => {
    return state.savedStories.includes(storyId);
  };

  // Navigation handlers
  const handleStartMission = () => {
    setCurrentScreen('scenarios');
  };

  const handleSelectScenario = (scenarioId: string) => {
    dispatch({ type: 'START_SCENARIO', scenarioId });
    const scenario = scenarios.find(s => s.id === scenarioId);
    if (scenario && scenario.stories.length > 0) {
      // For STORIES scenario, go to stories screen
      if (scenarioId === 'stories') {
        setCurrentScreen('stories');
      } else {
        // For other scenarios, go directly to questions
        const firstStory = scenario.stories[0];
        dispatch({ type: 'START_STORY', storyId: firstStory.id });
        setCurrentScreen('question');
      }
    }
  };

  const handleStartStory = () => {
    // Get the first story from current scenario
    const scenario = scenarios.find(s => s.id === state.currentScenario);
    if (scenario && scenario.stories.length > 0) {
      const firstStory = scenario.stories[0];
      dispatch({ type: 'START_STORY', storyId: firstStory.id });
    }
    
    setCurrentScreen('question');
  };

  const handleSelectAnswer = (optionId: string) => {
    const question = getCurrentQuestion();
    if (!question) return;

    const option = question.options.find(opt => opt.id === optionId);
    if (!option) return;

    dispatch({ 
      type: 'ANSWER_QUESTION', 
      answer: { 
        questionId: question.id, 
        optionId, 
        isCorrect: option.isCorrect 
      } 
    });

    setCurrentScreen('feedback');
  };

  const handleNextQuestion = () => {
    const story = getCurrentStory();
    if (!story) return;

    if (state.currentQuestionIndex < story.questions.length - 1) {
      dispatch({ type: 'NEXT_QUESTION' });
      setCurrentScreen('question');
    } else {
      // Story completed, go back to scenarios
      setCurrentScreen('scenarios');
    }
  };

  const handleSaveCurrentStory = () => {
    if (state.currentStory) {
      dispatch({ type: 'SAVE_STORY', storyId: state.currentStory });
    }
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('main');
  };

  const handleBack = () => {
    switch (currentScreen) {
      case 'scenarios':
        setCurrentScreen('main');
        break;
      case 'story':
        setCurrentScreen('scenarios');
        break;
      case 'stories':
        setCurrentScreen('scenarios');
        break;
      case 'question':
        setCurrentScreen('scenarios');
        break;
      case 'feedback':
        setCurrentScreen('question');
        break;
      case 'saved':
        setCurrentScreen('main');
        break;
      case 'notifications':
        setCurrentScreen('main');
        break;
      case 'stories-help':
        setCurrentScreen('main');
        break;
      default:
        setCurrentScreen('main');
    }
  };

  const handleHelp = () => {
    setCurrentScreen('stories-help');
  };

  const handleSettings = () => {
    setCurrentScreen('notifications');
  };

  const handleSaved = () => {
    setCurrentScreen('saved');
  };

  const handleStories = () => {
    setCurrentScreen('stories');
  };

  const handleViewStory = (storyId: string) => {
    dispatch({ type: 'START_STORY', storyId });
    setCurrentScreen('story');
  };

  const handleSaveStory = (storyId: string) => {
    dispatch({ type: 'SAVE_STORY', storyId });
  };

  const handleShareStory = (storyId: string) => {
    // TODO: Implement sharing functionality
    console.log('Sharing story:', storyId);
  };

  // Render current screen
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingFlowSimple onComplete={handleOnboardingComplete} />;
      
      case 'main':
        return (
          <MainMenuScreen
            onStartMission={handleStartMission}
            onHelp={handleHelp}
            onSaved={handleSaved}
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

      case 'story':
        const story = getCurrentStory();
        if (!story) {
          // Fallback to main menu if no story found
          return (
            <MainMenuScreen
              onStartMission={handleStartMission}
              onHelp={handleHelp}
              onSaved={handleSaved}
              onSettings={handleSettings}
            />
          );
        }
        return (
          <StoryScreen
            story={story}
            onBack={handleBack}
            onStartStory={handleStartStory}
            onSaveStory={handleSaveCurrentStory}
            isSaved={isStorySaved(story.id)}
            onShare={() => {}}
            onNext={() => {}}
          />
        );

      case 'question':
        const question = getCurrentQuestion();
        const storyForQuestion = getCurrentStory();
        if (!question || !storyForQuestion) {
          // Fallback to main menu if no question found
          return (
            <MainMenuScreen
              onStartMission={handleStartMission}
              onHelp={handleHelp}
              onSaved={handleSaved}
              onSettings={handleSettings}
            />
          );
        }
        const currentScenario = scenarios.find(s => s.id === state.currentScenario);
        return (
          <QuestionScreen
            question={question}
            questionNumber={state.currentQuestionIndex + 1}
            totalQuestions={storyForQuestion.questions.length}
            scenarioTitle={currentScenario?.title || 'STORM SURVIVAL'}
            onSelectAnswer={handleSelectAnswer}
            onBack={handleBack}
          />
        );

      case 'feedback':
        const feedbackQuestion = getCurrentQuestion();
        const feedbackStory = getCurrentStory();
        if (!feedbackQuestion || !feedbackStory) {
          // Fallback to main menu if no feedback data found
          return (
            <MainMenuScreen
              onStartMission={handleStartMission}
              onHelp={handleHelp}
              onSaved={handleSaved}
              onSettings={handleSettings}
            />
          );
        }
        
        const selectedOption = feedbackQuestion.options.find(
          opt => state.answers.some(answer => 
            answer.questionId === feedbackQuestion.id && answer.optionId === opt.id
          )
        );
        
        if (!selectedOption) {
          // Fallback to main menu if no selected option found
          return (
            <MainMenuScreen
              onStartMission={handleStartMission}
              onHelp={handleHelp}
              onSaved={handleSaved}
              onSettings={handleSettings}
            />
          );
        }

        return (
          <FeedbackScreen
            feedback={selectedOption.feedback}
            isCorrect={selectedOption.isCorrect}
            onNext={handleNextQuestion}
            onBack={handleBack}
          />
        );

      case 'saved':
        const savedStories = scenarios
          .flatMap(s => s.stories)
          .filter(story => isStorySaved(story.id));
        
        return (
          <SavedStoriesScreen
            savedStories={savedStories}
            onBack={handleBack}
            onViewStory={(storyId: string) => {
              // Find scenario for this story and navigate to it
              const scenario = scenarios.find(s => 
                s.stories.some(story => story.id === storyId)
              );
              if (scenario) {
                dispatch({ type: 'START_SCENARIO', scenarioId: scenario.id });
                dispatch({ type: 'START_STORY', storyId });
                setCurrentScreen('story');
              }
            }}
          />
        );

      case 'notifications':
        return (
          <NotificationScreen
            onBack={handleBack}
          />
        );

      case 'stories-help':
        return (
          <StoriesHelpScreen
            onBack={handleBack}
            onGoToStories={() => setCurrentScreen('stories')}
          />
        );

      case 'stories':
        const storiesScenario = scenarios.find(s => s.id === 'stories');
        return (
          <StoriesScreen
            stories={storiesScenario?.stories || []}
            onBack={handleBack}
            onViewStory={handleViewStory}
            onSaveStory={handleSaveStory}
            onShareStory={handleShareStory}
            savedStories={state.savedStories}
          />
        );

      default:
        return (
          <MainMenuScreen
            onStartMission={handleStartMission}
            onHelp={handleHelp}
            onSaved={handleSaved}
            onSettings={handleSettings}
          />
        );
    }
  };

  // Always return something, never null
  const screen = renderCurrentScreen();
  if (!screen) {
    // Ultimate fallback - simple loading screen
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

export const Navigation: React.FC = () => {
  return (
    <GameProvider>
      <NavigationContent />
    </GameProvider>
  );
};
